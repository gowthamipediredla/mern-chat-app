import React, { useEffect, useState } from "react";
import axios from "axios";
const ChatPage = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/chat");
    setUsers(res.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log({ users });
  return (
    <div>
      Chat Page
      {users.map((user) => (
        <div>{user.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
