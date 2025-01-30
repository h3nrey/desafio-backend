import { Router } from 'express';
import { createTask } from './controllers';

const router = Router();

router.post("/tarefas", createTask)
export default router;