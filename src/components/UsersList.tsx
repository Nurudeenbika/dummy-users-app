import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../types/User";

interface UsersListProps {
  onUserClick: (user: User) => void;
}

const UsersList: React.FC<UsersListProps> = ({ onUserClick }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<{ users: User[] }>(
          "https://dummyjson.com/users?limit=20"
        );
        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="users-list">
      {users.map((user) => (
        <div
          key={user.id}
          className="user-card"
          onClick={() => onUserClick(user)}
        >
          <h3>{`${user.firstName} ${user.lastName}`}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;