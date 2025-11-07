import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import Task from "./models/Task.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Sync DB
sequelize.sync().then(() => {
  console.log("Database connected and synced!");
  app.listen(process.env.PORT, () =>
    console.log(`Server running on http://localhost:${process.env.PORT}`)
  );
});
