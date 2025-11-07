import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// Create task
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// Update task
router.put("/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.update(req.body);
    res.json(task);
  } else res.status(404).json({ message: "Task not found" });
});

// Delete task
router.delete("/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.destroy();
    res.json({ message: "Deleted" });
  } else res.status(404).json({ message: "Task not found" });
});

export default router;
