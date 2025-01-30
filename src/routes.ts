import { Router } from 'express';
import { createTask, deleteTask, getTask, listTasks, updateTask } from './controllers';

const router = Router();

router.get("/tarefas/:id", getTask)
router.get("/tarefas", listTasks)
router.post("/tarefas", createTask)
router.put("/tarefas/:id", updateTask)
router.delete("/tarefas/:id", deleteTask)

export default router;