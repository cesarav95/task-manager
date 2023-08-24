import { Router } from 'express';
import { TasksController } from '../controllers/tasks.controller';
import { handlerTaskValidator, taskValidator } from '../validators/task.validator';
export class TasksRoutes {
  router: Router;
  tasksController:TasksController = new TasksController();

  constructor() {
    this.router = Router();
    this.configRoutes();
  }

  configRoutes(): void{
    this.router.get('/', this.tasksController.getTasks);
    this.router.post('/', taskValidator, handlerTaskValidator, this.tasksController.createTask);
    this.router.put('/:taskId', taskValidator, handlerTaskValidator, this.tasksController.updateTask);
    this.router.delete('/:taskId', this.tasksController.deleteTask);
  }
}
