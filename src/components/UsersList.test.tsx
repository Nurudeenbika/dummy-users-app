import { describe, it, expect, vi, Mock } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import UsersList from "./UsersList";
import axios from "axios";
import { User } from "../types/User";
import "@testing-library/jest-dom";

// Mock axios
vi.mock("axios");

const mockUsers: User[] = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", gender: "male" },
  { id: 2, firstName: "Jane", lastName: "Doe", email: "jane@example.com", gender: "female" },
];

describe("UsersList", () => {
  it("displays a list of users", async () => {
    // Mock the API response
    (axios.get as Mock).mockResolvedValueOnce({ data: { users: mockUsers } });

    // Render the component
    render(<UsersList onUserClick={() => {}} />);

    // Wait for the component to update with the fetched data
    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("john@example.com")).toBeInTheDocument();
    });

    // Additional assertions to ensure all users are rendered
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("jane@example.com")).toBeInTheDocument();
  });

  it("displays loading state initially", () => {
    // Mock the API response with a delay to test loading state
    (axios.get as Mock).mockResolvedValueOnce({ data: { users: mockUsers } });

    // Render the component
    render(<UsersList onUserClick={() => {}} />);

    // Check if the loading state is displayed
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("handles API error", async () => {
    // Spy on console.error to check if the error is logged
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    // Mock the API to reject with an error
    (axios.get as Mock).mockRejectedValueOnce(new Error("Failed to fetch users"));

    // Render the component
    render(<UsersList onUserClick={() => {}} />);

    // Wait for the loading state to disappear
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    // Check if the error is logged
    expect(consoleErrorSpy).toHaveBeenCalledWith("Error fetching users:", expect.any(Error));

    // Restore console.error to its original behavior
    consoleErrorSpy.mockRestore();
  });
});
