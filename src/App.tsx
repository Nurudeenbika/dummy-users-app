// src/App.tsx
import React, { useState } from "react";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import { User } from "./types/User";
import "./App.css";

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="app">
      <h1>Dummy Users App</h1> {/* Ensure this text is present */}
      <div className="container">
        <UsersList onUserClick={setSelectedUser} />
        <UserDetails user={selectedUser} />
      </div>
    </div>
  );
};

export default App;