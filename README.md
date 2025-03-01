# Dummy Users App

The **Dummy Users App** is a React application built with **Vite**, **TypeScript**, and **Vitest**. It fetches a list of dummy users from the [DummyJSON API](https://dummyjson.com/docs/users) and displays their full names and email addresses. When a user is clicked, their detailed information (first name, last name, email, and gender) is displayed. The application follows best practices and includes comprehensive testing with **Vitest** and **Istanbul** for 90% to 100% test coverage.

---

## Features

- **Fetch and Display Users**: Fetches 20 dummy users from the DummyJSON API and displays their full names and email addresses.
- **User Details**: Click on a user to view their detailed information, including first name, last name, email, and gender.
- **Professional Design**: A clean and responsive user interface.
- **Testing**: Comprehensive unit tests with **Vitest** and **Istanbul** for 90% to 100% test coverage.
- **Type Safety**: Built with **TypeScript** for type safety and better developer experience.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **TypeScript**: A typed superset of JavaScript for better code quality.
- **Vitest**: A fast and lightweight testing framework for Vite.
- **Istanbul**: A code coverage tool for JavaScript.
- **Axios**: A promise-based HTTP client for making API requests.
- **Testing Library**: A library for testing React components.

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/dummy-users-app.git
   cd dummy-users-app





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
**Install Dependencies**:

  ```bash
  npm install
  Run the Development Server:

  npm run dev


##Open the App:
Visit http://localhost:5173 in your browser to view the app.  

Running Tests
The application includes comprehensive unit tests written with Vitest. To run the tests:

Run All Tests:

npm test
Run Tests with Coverage:

npm run coverage
