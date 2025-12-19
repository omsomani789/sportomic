const express = require("express");
const router = express.Router();
const pool = require("../db");

// Get all bookings
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM bookings");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// Create a booking
router.post("/", async (req, res) => {
  const { venue_id, sport_id, member_id, booking_date, amount, coupon_code, status } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO bookings (venue_id, sport_id, member_id, booking_date, amount, coupon_code, status)
       VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
      [venue_id, sport_id, member_id, booking_date, amount, coupon_code, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

module.exports = router;
