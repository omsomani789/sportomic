import React, { useEffect, useState } from "react";
import { fetchVenues } from "../api";

const VenueList = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetchVenues().then(data => setVenues(data));
  }, []);

  return (
    <div>
      <h2>Venues</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {venues.map(v => (
            <tr key={v.venue_id}>
              <td>{v.venue_id}</td>
              <td>{v.name}</td>
              <td>{v.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VenueList;
