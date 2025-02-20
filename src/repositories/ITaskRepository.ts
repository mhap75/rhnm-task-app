import { ITask } from "../models/Task";

// This interface defines the contract for task repository operations.
export interface ITaskRepository {
  // Retrieve all tasks
  getAll(): Promise<ITask[]>;
  // Retrieve a task by its ID
  getById(id: string): Promise<ITask | null>;
  // Create a new task
  create(task: Partial<ITask>): Promise<ITask>;
  // Update an existing task by its ID
  update(id: string, task: Partial<ITask>): Promise<ITask | null>;
  // Delete a task by its ID
  delete(id: string): Promise<ITask | null>;
}
