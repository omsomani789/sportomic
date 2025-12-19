import React, { useEffect, useState } from "react";
import { fetchMembers } from "../api";

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers().then(data => setMembers(data));
  }, []);

  return (
    <div>
      <h2>Members</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Trial User</th>
            <th>Converted from Trial</th>
            <th>Join Date</th>
          </tr>
        </thead>
        <tbody>
          {members.map(m => (
            <tr key={m.member_id}>
              <td>{m.member_id}</td>
              <td>{m.name}</td>
              <td>{m.status}</td>
              <td>{m.is_trial_user ? "Yes" : "No"}</td>
              <td>{m.converted_from_trial ? "Yes" : "No"}</td>
              <td>{m.join_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
