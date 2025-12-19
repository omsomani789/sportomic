import React, { useEffect, useState } from "react";
import { fetchBookings } from "../api";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings().then(data => setBookings(data));
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Venue ID</th>
            <th>Sport ID</th>
            <th>Member ID</th>
            <th>Booking Date</th>
            <th>Amount</th>
            <th>Coupon Code</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b.booking_id}>
              <td>{b.booking_id}</td>
              <td>{b.venue_id}</td>
              <td>{b.sport_id}</td>
              <td>{b.member_id}</td>
              <td>{b.booking_date}</td>
              <td>{b.amount}</td>
              <td>{b.coupon_code || "-"}</td>
              <td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
