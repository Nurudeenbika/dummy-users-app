# Dummy Users Backend API

The **Dummy Users Backend API** is a **Node.js RESTful API** that acts as a middleware between the **Dummy-user-app** (front-end) and the **DummyJSON API**. It fetches a list of users and their details from the DummyJSON API and serves them to the front-end. The API is built using **Express**, **Axios**, and **CORS**, and includes comprehensive testing using **Jest** and **Supertest**.

---

## Features

- **Fetch All Users**: Returns a list of 20 users from the DummyJSON API.
- **Fetch User Details**: Returns detailed information about a specific user when their ID is provided.
- **Error Handling**: Properly handles errors and returns meaningful error messages.
- **Testing**: Includes unit tests with **Jest** and **Supertest**, with **spying** to mock API calls.

---

## Technologies Used

- **Node.js**: A JavaScript runtime for building scalable server-side applications.
- **Express**: A fast and minimalist web framework for Node.js.
- **Axios**: A promise-based HTTP client for making API requests.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Jest**: A JavaScript testing framework.
- **Supertest**: A library for testing HTTP servers.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nurudeenbika/dummy-users-app
   cd dummy-users-backend-api