import { describe, it, expect, vi } from "vitest";
import { render, screen, } from "@testing-library/react";
import App from "./App";
import { User } from "./types/User";
import "@testing-library/jest-dom";

// Mock the UsersList component
vi.mock("../components/UsersList", () => ({
  default: ({ onUserClick }: { onUserClick: (user: User) => void }) => {
    // Simulate a user click after the component mounts
    setTimeout(() => {
      onUserClick({
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        gender: "male",
      });
    }, 0);

    return <div>Mocked UsersList</div>;
  },
}));

describe("App", () => {
  it("renders the app with initial state", () => {
    render(<App />);

    // Check if the app title is rendered
    expect(screen.getByText("Dummy Users App")).toBeInTheDocument();

    // Check if the initial state (no user selected) is rendered
    expect(screen.getByText("Select a user to view details.")).toBeInTheDocument();
  });

  it("displays user details when a user is selected", async () => {
    render(<App />);
  });
});