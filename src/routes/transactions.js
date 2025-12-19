const express = require("express");
const router = express.Router();
const pool = require("../db");

// Get all transactions
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM transactions");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

// Create transaction
router.post("/", async (req, res) => {
  const { booking_id, amount, payment_method, status } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO transactions (booking_id, amount, payment_method, status)
       VALUES ($1,$2,$3,$4) RETURNING *`,
      [booking_id, amount, payment_method, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create transaction" });
  }
});

module.exports = router;
