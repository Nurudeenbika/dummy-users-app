// server.test.js
const request = require("supertest");
const app = require("./server");
const axios = require("axios");

// Mock axios
jest.mock("axios");

describe("GET /api/users", () => {
  it("should return a list of users", async () => {
    const mockUsers = [
      { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
    ];

    // Mock the axios call
    axios.get.mockResolvedValueOnce({ data: { users: mockUsers } });

    const response = await request(app).get("/api/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUsers);
  });

  it("should handle errors when fetching users", async () => {
    // Mock the axios call to throw an error
    axios.get.mockRejectedValueOnce(new Error("Failed to fetch users"));

    const response = await request(app).get("/api/users");
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: "Failed to fetch users" });
  });
});

describe("GET /api/users/:id", () => {
  it("should return details of a specific user", async () => {
    const mockUser = {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      gender: "male",
    };

    // Mock the axios call
    axios.get.mockResolvedValueOnce({ data: mockUser });

    const response = await request(app).get("/api/users/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUser);
  });

  it("should handle errors when fetching user details", async () => {
    // Mock the axios call to throw an error
    axios.get.mockRejectedValueOnce(new Error("Failed to fetch user details"));

    const response = await request(app).get("/api/users/1");
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: "Failed to fetch user details" });
  });
});