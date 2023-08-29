import request from "supertest";
import { describe } from "node:test";
import { TaskDTO } from "../models/tasks";
import { ApiServer } from "../utils/api-server";

describe('app.ts', () => {
  const server = new ApiServer();

  test('should GET all task', async() => {
    const response = await request(server.app).get('/api/tasks');
    expect(response.statusCode).toBe(200);
  });

  test('should POST new task', async() => {
    const mockTask: TaskDTO = {
      title: 'MOCK TASK',
      description:'Description mock',
      status: 'completed'
    }; 
    await request(server.app).post('/api/tasks')
      .send(mockTask)
      .expect(200);    
  });

  test('should POST new task with errors', async() => {
    const mockTask: TaskDTO = {
      title: 'MOCK TASK',
      description:null as any,
      status: 'completed'
    }; 
    await request(server.app).post('/api/tasks')
      .send(mockTask)
      .expect(403);    
  });

  test('should PUT task', async() => {
    const mockTask: TaskDTO = {
      title: 'MOCK TASK',
      description:'Description mock',
      status: 'completed'
    }; 
    await request(server.app).put('/api/tasks/taskId')
      .send(mockTask)
      .expect(200);    
  });

  test('should PUT task with errors', async() => {
    const mockTask: TaskDTO = {
      title: 'MOCK TASK',
      description:'Description mock',
      status: 'completed-task' as any
    }; 
    await request(server.app).put('/api/tasks/taskId')
      .send(mockTask)
      .expect(403);    
  });

  test('should DELETE task', async() => {
    const mockTask: TaskDTO = {
      title: 'MOCK TASK',
      description:'Description mock',
      status: 'completed'
    }; 
    await request(server.app).delete('/api/tasks/taskId')
      .send(mockTask)
      .expect(200);    
  });
});