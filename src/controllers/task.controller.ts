import { Router, Request, Response } from "express";
import { TaskService } from "../services/TaskService";
import { TaskRepository } from "../repositories/TaskRepository";

// Create a new router for task endpoints
const router = Router();

// Initialize the TaskService with the TaskRepository
const taskService = new TaskService(new TaskRepository());

// GET /api/tasks – Retrieve all tasks
router.get("/", async (req: Request, res: Response) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    // Return a 500 error if something goes wrong
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/tasks/:id – Retrieve a task by ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) {
      res.status(404).json({ error: "Task not found" });
      return;
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /api/tasks – Create a new task
router.post("/", async (req: Request, res: Response) => {
  try {
    const task = await taskService.createTask(req.body);
    // Return the created task with a 201 status code
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT /api/tasks/:id – Update an existing task
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, req.body);
    if (!updatedTask) {
      res.status(404).json({ error: "Task not found" });
      return;
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /api/tasks/:id – Delete a task by its ID
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deletedTask = await taskService.deleteTask(req.params.id);
    if (!deletedTask) {
      res.status(404).json({ error: "Task not found" });
      return;
    }
    res.json(deletedTask);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Export the router to be used in the app setup
export default router;
