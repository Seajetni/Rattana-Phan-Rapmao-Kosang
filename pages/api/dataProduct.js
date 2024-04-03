import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "data",
});

export default async function handler(req, res) {
  let connection;
  try {
    connection = await pool.getConnection();

    if (req.method === "GET") {
      const { id } = req.query;
      try {
        if (id) {
          const [headRows] = await connection.query(
            "SELECT * FROM head WHERE id = ?",
            [id]
          );
          if (headRows.length === 0) {
            try {
              const [Row] = await connection.query(
                "SELECT * FROM images WHERE id = ? ",
                [id]
              );

              if (Row.length === 0) {
                return res.status(404).json({ message: "No data found." });
              }

              const imageIds = Row.map((row) => row.id);

              // Fetch all associated gallery rows
              const [galleryRows] = await connection.query(
                "SELECT * FROM imgGallery WHERE images_id IN (?)",
                [imageIds]
              );

              const galleriesMap = {};

              // Group gallery rows by image id
              galleryRows.forEach((row) => {
                if (!galleriesMap[row.images_id]) {
                  galleriesMap[row.images_id] = [];
                }
                galleriesMap[row.images_id].push(row);
              });

              // Assign galleries to respective images
              const images = Row.map((image) => {
                image.gallery = galleriesMap[image.id] || [];
                return image;
              });

              res.status(200).json(images);
            } catch (error) {
              console.error("Error fetching data:", error);
              res.status(500).json({ message: "Internal server error" });
            }
            return;
          }

          const head = headRows[0];
          const [imageRows] = await connection.query(
            "SELECT * FROM images WHERE head_id = ?",
            [id]
          );
          const images = [];

          for (const image of imageRows) {
            const [galleryRows] = await connection.query(
              "SELECT * FROM imgGallery WHERE images_id = ?",
              [image.id]
            );
            const gallery = galleryRows;

            image.gallery = gallery;
            images.push(image);
          }

          head.images = images;
          console.log(images);
          res.status(200).json(head);
        } else {
          const [headRows] = await connection.query("SELECT * FROM head");
          const heads = [];

          for (const head of headRows) {
            const [imageRows] = await connection.query(
              "SELECT * FROM images WHERE head_id = ?",
              [head.id]
            );
            const images = [];

            for (const image of imageRows) {
              const [galleryRows] = await connection.query(
                "SELECT * FROM imgGallery WHERE images_id = ?",
                [image.id]
              );
              const gallery = galleryRows;

              image.gallery = gallery;
              images.push(image);
            }

            head.images = images;
            heads.push(head);
          }

          res.status(200).json(heads);
        }
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error." });
      }
    } else if (req.method === "POST") {
      const { headId, imageData, galleryData } = req.body;

      await connection.beginTransaction();

      try {
        const [result] = await connection.query(
          "INSERT INTO images (head_id, imageLink, status, area, where1, name) VALUES (?, ?, ?, ?, ?, ?)",
          [
            headId,
            imageData.imageLink,
            imageData.status,
            imageData.area,
            imageData.where1,
            imageData.name,
          ]
        );
        const imageId = result.insertId;

        await Promise.all(
          galleryData.map(async (galleryItem) => {
            await connection.query(
              "INSERT INTO imgGallery (images_id, head_id, img) VALUES (?, ?, ?)",
              [imageId, headId, galleryItem]
            );
          })
        );

        await connection.commit();
        res
          .status(201)
          .json({ message: "Image and gallery added successfully" });
      } catch (error) {
        console.error("Error adding image and gallery:", error);
        await connection.rollback();
        res.status(500).json({ message: "Internal Server Error" });
      }
    } else if (req.method === "PUT") {
      // Update
      const { id } = req.query;
      const { name, where1, area, status, imageLink, head_id } = req.body; // Destructure all required fields from req.body

      // Check if any field is provided for update
      if (name || where1 || area || status || imageLink || head_id) {
        await connection.query(
          "UPDATE images SET name = ?, where1 = ?, area = ?, status = ?, imageLink = ?, head_id = ? WHERE id = ?",
          [name, where1, area, status, imageLink, head_id, id],
        );
        res.status(201).send("User added successfully");
      } else {
        // No fields provided for update
        console.log("No fields provided for update");
        res.status(400).send("No fields provided for update");
      }
    } else if (req.method === "DELETE") {
      // Handle DELETE request
      const { imageId } = req.body;

      await connection.beginTransaction();

      // Delete associated rows in the imgGallery table first
      await connection.query("DELETE FROM imgGallery WHERE images_id = ?", [
        imageId,
      ]);

      // Then delete the row from the images table
      await connection.query("DELETE FROM images WHERE id = ?", [imageId]);

      await connection.commit();
      res
        .status(200)
        .json({ message: "Image and associated gallery deleted successfully" });
    }
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
