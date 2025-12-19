import React from "react";

const Navbar = ({ view, setView }) => {
  const buttonStyle = (v) => ({
    margin: "0 10px",
    padding: "10px 15px",
    cursor: "pointer",
    background: view === v ? "#0056b3" : "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
  });

  return (
    <nav style={{ padding: "15px", background: "#007bff", display: "flex", justifyContent: "center" }}>
      <button style={buttonStyle("venues")} onClick={() => setView("venues")}>Venues</button>
      <button style={buttonStyle("members")} onClick={() => setView("members")}>Members</button>
      <button style={buttonStyle("bookings")} onClick={() => setView("bookings")}>Bookings</button>
      <button style={buttonStyle("transactions")} onClick={() => setView("transactions")}>Transactions</button>
    </nav>
  );
};

export default Navbar;
