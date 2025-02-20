import express from "express";
import mongoose from "mongoose";
import taskRouter from "./controllers/task.controller";
import dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();

// Create an Express application instance
const app = express();

// Use express.json() middleware to automatically parse JSON requests
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/taskdb")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database Connection Error:", err));

// Use the task router for all routes starting with /api/tasks
app.use("/api/tasks", taskRouter);

// Export the configured Express app
export default app;
