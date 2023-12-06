import React, { useState, useEffect } from "react";
import { API } from "../Global";
import axios from "axios";
import UserDetails from "./UserDetails";

function UserCards() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    axios.get(`${API}`).then((response) => setUsers(response.data));
  };
  useEffect(() => getUsers(), []);
  console.log(users);
  return (
    <div className="container">
      {users.map((user) => (
        <UserDetails user={user} />
      ))}
    </div>
  );
}

export default UserCards;
