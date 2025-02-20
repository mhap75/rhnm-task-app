// Import necessary modules from mongoose
import { Schema, model, Document } from "mongoose";

// Define the interface for a Task document
export interface ITask extends Document {
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Define the Task schema with fields and options
const TaskSchema = new Schema<ITask>(
  {
    // Title is required for every task
    title: { type: String, required: true },
    // Description is optional
    description: { type: String },
    // Completed flag defaults to false
    completed: { type: Boolean, default: false },
  },
  {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Create and export the Task model based on the schema
export default model<ITask>("Task", TaskSchema);
