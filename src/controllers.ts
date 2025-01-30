import { PrismaClient, Task } from '@prisma/client';
import { Request, Response } from 'express';
import { validStatus } from './utils';

const prisma = new PrismaClient();

async function getTask(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id: Number(id) },
    });

    if (!task) {
      res
        .status(404)
        .json({
          error: 'task could not be found with this specific id: ' + id,
        });
      return;
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error to get the task' });
  }
}

async function listTasks(req: Request, res: Response): Promise<void> {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error, could not be listed' });
  }
}

async function createTask(req: Request, res: Response): Promise<void> {
  const { title, description, status, expireDate }: Task = req.body;

  if (!title || !status) {
    res.status(400).json({ error: 'Mandatory fields are missing!!!' });
    return;
  }

  if (!validStatus.includes(status)) {
    res.status(400).json({ error: 'Invalid Status' });
    return;
  }

  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        expireDate: expireDate ? new Date(expireDate) : null,
      },
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error, task could not be created' });
  }
}

async function updateTask(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { title, description, status, expireDate }: Task = req.body;

  if (status) {
    if (!validStatus.includes(status)) {
      res.status(400).json({ error: 'task with invalid status' });
      return;
    }
  }

  try {
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        status,
        expireDate: expireDate ? new Date(expireDate) : undefined,
      },
    });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error: task could not be updated' });
  }
}

async function deleteTask(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id: Number(id) },
    });

    if (!task) {
      res
        .status(404)
        .json({
          error: 'task could not be found with this specific id: ' + id,
        });
      return;
    }
    await prisma.task.delete({
      where: { id: Number(id) },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error: task could not be deleted' });
  }
}

export { createTask, listTasks, getTask, updateTask, deleteTask };
