import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import compression from 'compression';
import { TasksRoutes } from '../routes/tasks.routes';
dotenv.config();

export class ApiServer {
  public app: express.Application;
  private readonly BASE_URI = '/api';

  constructor() {
    this.app = express();
    this.configServer();
    this.configRoutes();
  }

  configServer(): void {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(compression());
    this.app.use(cors());
  }

  configRoutes(): void {
    this.app.use(`${this.BASE_URI}/tasks`, new TasksRoutes().router);
  }

  start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`API is running at http://localhost:${this.app.get('port')}`);
    });
  }
}