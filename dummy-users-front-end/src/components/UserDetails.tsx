//UserDetails.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../types/User";

interface UserDetailsProps {
  user: User | null;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  const [userDetails, setUserDetails] = useState<User | null>(null);

  useEffect(() => {
    if (user) {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/users/${user.id}`
          );
          setUserDetails(response.data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      fetchUserDetails();
    }
  }, [user]);

  if (!user) {
    return <div>Select a user to view details.</div>;
  }

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <p><strong>First Name:</strong> {userDetails?.firstName}</p>
      <p><strong>Last Name:</strong> {userDetails?.lastName}</p>
      <p><strong>Email:</strong> {userDetails?.email}</p>
      <p><strong>Gender:</strong> {userDetails?.gender}</p>
    </div>
  );
};

export default UserDetails;