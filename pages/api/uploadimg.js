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
      if (req.query.id) {
        // If ID is provided, get by ID
        const id = req.query.id;
        const [rows] = await connection.query(
          "SELECT * FROM imggallery WHERE id = ?",
          [id]
        );
        if (rows.length === 0) {
          res.status(404).json({ error: "Entry not found" });
        } else {
          res.status(200).json(rows[0]);
        }
      } else {
        // Get all entries
        const [rows] = await connection.query("SELECT * FROM imggallery");
        res.status(200).json(rows);
      }
    } else if (req.method === "POST") {
      const { head_id, img, images_id } = req.body;

      await connection.query(
        "INSERT INTO imgGallery (  head_id, img, images_id) VALUES (?, ?, ? )",
        [head_id, img, images_id]
      );
      res.status(201).send("User added successfully ");
    } else if (req.method === "DELETE") {
      // Delete
      const { id } = req.body;
      await connection.query("DELETE FROM imgGallery WHERE id = ?", [id]);
      res.status(200).send("User deleted successfully");
    }
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
