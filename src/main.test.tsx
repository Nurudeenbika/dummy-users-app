import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom"; 
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("main.tsx", () => {
  it("renders the App component", async () => {
    // Render the App component
    render(<App />);

    // Wait for the App component to render the title
    await waitFor(() => {
      expect(screen.getByText("Dummy Users App")).toBeInTheDocument();
    });
  });
});