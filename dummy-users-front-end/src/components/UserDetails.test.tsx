// UserDetails.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import UserDetails from "./UserDetails";
import axios from "axios";
import { User } from "../types/User";
import "@testing-library/jest-dom";

// Mock axios
vi.mock("axios");

const mockUser: User = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  gender: "male",
};

describe("UserDetails", () => {
  it("displays a message when no user is selected", () => {
    render(<UserDetails user={null} />);

    expect(screen.getByText("Select a user to view details.")).toBeInTheDocument();
  });

  it("fetches and displays user details when a user is provided", async () => {
    (axios.get as vi.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockUser });

    render(<UserDetails user={mockUser} />);

    // Wait for the API call to resolve and the component to update
    await waitFor(() => {
      expect(screen.getByText("User Details")).toBeInTheDocument();
      expect(screen.getByText("John")).toBeInTheDocument();
      expect(screen.getByText("Doe")).toBeInTheDocument();
      expect(screen.getByText("john@example.com")).toBeInTheDocument();
      expect(screen.getByText("male")).toBeInTheDocument();
    });
  });

  it("handles API error gracefully", async () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    (axios.get as vi.MockedFunction<typeof axios.get>).mockRejectedValueOnce(new Error("Failed to fetch user details"));

    render(<UserDetails user={mockUser} />);

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith("Error fetching user details:", expect.any(Error));
    });

    consoleErrorSpy.mockRestore();
  });
});
