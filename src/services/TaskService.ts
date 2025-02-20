import { ITaskRepository } from "../repositories/ITaskRepository";
import { ITask } from "../models/Task";

// The TaskService handles business logic and interacts with the repository layer.
export class TaskService {
  // Inject the task repository into the service for decoupling
  constructor(private taskRepository: ITaskRepository) {}

  // Get all tasks
  getAllTasks(): Promise<ITask[]> {
    return this.taskRepository.getAll();
  }

  // Get a specific task by ID
  getTaskById(id: string): Promise<ITask | null> {
    return this.taskRepository.getById(id);
  }

  // Create a new task
  createTask(task: Partial<ITask>): Promise<ITask> {
    return this.taskRepository.create(task);
  }

  // Update an existing task
  updateTask(id: string, task: Partial<ITask>): Promise<ITask | null> {
    return this.taskRepository.update(id, task);
  }

  // Delete a task
  deleteTask(id: string): Promise<ITask | null> {
    return this.taskRepository.delete(id);
  }
}
