import mysql from "mysql2/promise";
import { v4 as uuidv4 } from "uuid";
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
          "SELECT * FROM knowhow WHERE id = ?",
          [id]
        );
        if (rows.length === 0) {
          res.status(404).json({ error: "Entry not found" });
        } else {
          res.status(200).json(rows[0]);
        }
      } else {
        // Get all entries
        const [rows] = await connection.query("SELECT * FROM knowhow");
        res.status(200).json(rows);
      }
    } else if (req.method === "POST") {
      const { name, details, img, date } = req.body;
      const id = uuidv4();

      await connection.query(
        "INSERT INTO knowhow (id, name, details, img, date) VALUES (?, ?, ?, ?, ?)",
        [id, name, details, img, date]
      );
      res.status(201).send("User added successfully");
    } else if (req.method === "PUT") {
      // Update
      const { id } = req.query;
      const { name, details, img, date } = req.body; // Destructure all required fields from req.body
      await connection.query(
        "UPDATE knowhow SET name = ?, details = ?, img = ?, date = ? WHERE id = ?",
        [name, details, img, date, id]
      );
      res.status(201).send("User added successfully");
    } else if (req.method === "DELETE") {
      // Delete
      const { id } = req.body;
      await connection.query("DELETE FROM knowhow WHERE id = ?", [id]);
      res.status(200).send("User deleted successfully");
    }

    connection.release();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}
