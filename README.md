# Task Management API

A simple REST API for managing tasks, built with Express, TypeScript, and MongoDB using Mongoose. This API follows SOLID principles and implements basic CRUD operations to create, read, update, and delete tasks.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- **Create Task:** Add a new task with a title, description, and completion status.
- **Retrieve Tasks:** Get a list of all tasks or a single task by its ID.
- **Update Task:** Modify details of an existing task.
- **Delete Task:** Remove a task by its unique identifier.

## Technologies

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for building REST APIs.
- **TypeScript**: Adds static typing to JavaScript.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **dotenv**: Manages environment variables.

## Getting Started

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) and npm installed.
- MongoDB should be running locally or accessible via a cloud service like MongoDB Atlas.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd task-management-api
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

### Configuration

Create a `.env` file in the root directory with the following content:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/taskdb
```

Replace the `MONGO_URI` value with your MongoDB connection string if necessary.

### Running the Application

- **Development Mode:**

  ```bash
  npm run dev
  ```

- **Production Mode:**

  First, build the project:

  ```bash
  npm run build
  ```

  Then, start the server:

  ```bash
  npm start
  ```

## API Endpoints

### 1. Create Task

- **HTTP Method:** POST
- **Endpoint:** `/api/tasks`
- **Description:** Creates a new task.
- **Request Body (JSON):**

  ```json
  {
    "title": "Task title",         // Required: The name or title of the task.
    "description": "Task details", // Optional: More information about the task.
    "completed": false             // Optional: Completion status (defaults to false).
  }
  ```

- **Response (JSON):**

  ```json
  {
    "id": "unique-task-id",
    "title": "Task title",
    "description": "Task details",
    "completed": false,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

### 2. Retrieve All Tasks

- **HTTP Method:** GET
- **Endpoint:** `/api/tasks`
- **Description:** Retrieves all tasks stored in the system.
- **Response (JSON):**

  ```json
  [
    {
      "id": "unique-task-id",
      "title": "Task title",
      "description": "Task details",
      "completed": false,
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  ]
  ```

### 3. Retrieve a Specific Task

- **HTTP Method:** GET
- **Endpoint:** `/api/tasks/:id`
- **Description:** Retrieves details of a single task by its unique ID.
- **Request Parameter:**
  - `:id` – The unique identifier of the task.
- **Response (JSON):**

  ```json
  {
    "id": "unique-task-id",
    "title": "Task title",
    "description": "Task details",
    "completed": false,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

  *Returns a 404 error if the task is not found.*

### 4. Update Task

- **HTTP Method:** PUT
- **Endpoint:** `/api/tasks/:id`
- **Description:** Updates an existing task.
- **Request Parameter:**
  - `:id` – The unique identifier of the task.
- **Request Body (JSON):**

  ```json
  {
    "title": "Updated task title",   // Optional: New title for the task.
    "description": "Updated details", // Optional: New description.
    "completed": true                 // Optional: New completion status.
  }
  ```

- **Response (JSON):**

  ```json
  {
    "id": "unique-task-id",
    "title": "Updated task title",
    "description": "Updated details",
    "completed": true,
    "createdAt": "original timestamp",
    "updatedAt": "updated timestamp"
  }
  ```

  *Returns a 404 error if the task is not found.*

### 5. Delete Task

- **HTTP Method:** DELETE
- **Endpoint:** `/api/tasks/:id`
- **Description:** Deletes a task identified by its unique ID.
- **Request Parameter:**
  - `:id` – The unique identifier of the task.
- **Response (JSON):**

  ```json
  {
    "id": "unique-task-id",
    "title": "Task title",
    "description": "Task details",
    "completed": false,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

  *Returns a 404 error if the task is not found.*

## License

This project is licensed under the [MIT License](LICENSE).
