import Task, { ITask } from "../models/Task";
import { ITaskRepository } from "./ITaskRepository";

// Implements the ITaskRepository interface using Mongoose for database operations.
export class TaskRepository implements ITaskRepository {
  // Fetch all tasks from the database.
  async getAll(): Promise<ITask[]> {
    return Task.find().exec();
  }

  // Fetch a single task by its ID.
  async getById(id: string): Promise<ITask | null> {
    return Task.findById(id).exec();
  }

  // Create a new task document.
  async create(task: Partial<ITask>): Promise<ITask> {
    return new Task(task).save();
  }

  // Update an existing task and return the updated document.
  async update(id: string, task: Partial<ITask>): Promise<ITask | null> {
    return Task.findByIdAndUpdate(id, task, { new: true }).exec();
  }

  // Delete a task document by its ID.
  async delete(id: string): Promise<ITask | null> {
    return Task.findByIdAndDelete(id).exec();
  }
}
