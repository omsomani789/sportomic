import React, { useState } from "react";
import Navbar from "./components/Navbar";
import VenueList from "./components/Venuelist";
import MemberList from "./components/MemberList";
import BookingList from "./components/BookingList";
import TransactionList from "./components/TransactionList";

function App() {
  const [view, setView] = useState("venues");

  const renderView = () => {
    switch(view) {
      case "venues": return <VenueList />;
      case "members": return <MemberList />;
      case "bookings": return <BookingList />;
      case "transactions": return <TransactionList />;
      default: return <VenueList />;
    }
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar view={view} setView={setView} />
      <div style={{ padding: "20px", maxWidth: "95%", margin: "0 auto" }}>
        {renderView()}
      </div>
    </div>
  );
}

export default App;
