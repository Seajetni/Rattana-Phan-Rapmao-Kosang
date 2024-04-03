import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "data",
});

export default async function handler(req, res) {
  try {
    const connection = await db.getConnection();

    if (req.method === "GET") {
      if (req.query.id) {
        // If ID is provided, get by ID
        const id = req.query.id;
        const [rows] = await connection.query(
          "SELECT * FROM contect WHERE id = ?",
          [id]
        );
        if (rows.length === 0) {
          res.status(404).json({ error: "Entry not found" });
        } else {
          res.status(200).json(rows[0]);
        }
      } else {
        // Get all entries
        const [rows] = await connection.query("SELECT * FROM contect");
        res.status(200).json(rows);
      }
    }  else if (req.method === "PUT") {
      const { id } = req.query;
      const { video , title , 	metadescription } = req.body;

      if (video || title || metadescription) {
        await connection.query("UPDATE contect SET  video = ? , title = ? , metadescription = ? WHERE id = ?", [
          video,
          title,
          metadescription,
          id
        ]);
        res.status(201).send("User added successfully");
      } else {
        console.log("No fields provided for update");
        res.status(400).send("No fields provided for update");
      }
    } else if (req.method === "DELETE") {
      // Delete
      const { id } = req.body;
      await connection.query("DELETE FROM contect WHERE id = ?", [id]);
      res.status(200).send("User deleted successfully");
    }

    connection.release();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}
