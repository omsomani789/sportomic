require("dotenv").config();
const express = require("express");
const cors = require("cors");

const venueRoutes = require("./routes/venues");
const membersRoutes = require("./routes/members");
const bookingsRoutes = require("./routes/bookings");
const transactionsRoutes = require("./routes/transactions");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/venues", venueRoutes);
app.use("/api/members", membersRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/transactions", transactionsRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Venue Booking Backend is running",
    endpoints: [
      "/api/venues",
      "/api/members",
      "/api/bookings",
      "/api/transactions"
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
