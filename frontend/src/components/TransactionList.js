import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../api";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions().then(data => setTransactions(data));
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Booking ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Transaction Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t.transaction_id}>
              <td>{t.transaction_id}</td>
              <td>{t.booking_id}</td>
              <td>{t.type}</td>
              <td>{t.amount}</td>
              <td>{t.status}</td>
              <td>{t.transaction_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
