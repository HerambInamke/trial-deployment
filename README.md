# trial-deployment

# Express.js API Server

A simple API server built using **Express.js**, designed for basic demonstration purposes. It includes routes to handle GET and POST requests with input validation and proper error handling.

---

## Features

- 🌐 **GET Route**: Responds with a welcome message indicating that the API is live.
- 📝 **POST Route**: Accepts user data (`name` and `age`) and responds with a personalized message.
- 🔍 **404 Handling**: Returns a friendly error message for undefined routes.
- 🛠️ **Input Validation**: Ensures that required fields are provided in POST requests.

---

## Tech Stack

- **Node.js**: Runtime environment for JavaScript.
- **Express.js**: Framework for building web applications and APIs.

---

## Routes

### **GET `/`**
- **Description**: Returns a message confirming the API is live.
- **Example Response**:
  ```json
  "🎉 API is live and running smoothly!"
