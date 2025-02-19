import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import UserDetails from "./UserDetails";
import { User } from "../types/User";

describe("UserDetails", () => {
  it("displays user details", () => {
    const user: User = {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      gender: "male",
    };

    render(<UserDetails user={user} />);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText("male")).toBeInTheDocument();
  });

  it("displays a message when no user is selected", () => {
    render(<UserDetails user={null} />);
    expect(screen.getByText("Select a user to view details.")).toBeInTheDocument();
  });
});