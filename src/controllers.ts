import { PrismaClient, Task } from "@prisma/client";
import { Request, Response } from "express";
import { validStatus } from "./utils";

const prisma = new PrismaClient();

async function createTask(req: Request, res: Response): Promise<void> {
    const { title, description, status, expireDate }: Task = req.body;

    if(!title || !status) {
        res.status(400).json({error: "Mandatory fields are missing!!!"}); 
        return;
    }

    
    if (!validStatus.includes(status)) {
        res.status(400).json({ error: 'Invalid Status' });
        return;
    }

    try {
        const tarefa = await prisma.task.create({
        data: {
            title,
            description,
            status,
            expireDate: expireDate ? new Date(expireDate) : null,
        },
        });

        res.status(201).json(tarefa);
    } catch (error) {
        res.status(500).json({ error: 'Error, task could not be created' });
    }
}

export {
    createTask
}