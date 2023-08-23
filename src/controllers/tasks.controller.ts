import { Request, Response } from 'express';
import { TaskDTO } from '../models/tasks';
import taskService from '../services/tasks.service';

export class TasksController {
  
  async getTasks(req: Request, res: Response): Promise<void> {
    //const taskServices = new TasksService();
    const data = await taskService.getAllTasks();    
    res.json({ data });
  }

  async createTask(req: Request, res: Response): Promise<void> {
    const task: TaskDTO = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status
    }
    console.log(req.body);

    const result = await taskService.createTask(task);

    res.json({result});
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    const taskId = req.params.taskId;

    const taskData: TaskDTO = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status
    }

    const result = await taskService.updateTask(taskId, taskData);

    res.json({result});
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    const taskId = req.params.taskId;

    const result = await taskService.deleteTask(taskId);

    res.json({result});
  }
}
