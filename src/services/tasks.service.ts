import { ResponseTaskDTO, TaskDTO } from "../models/tasks";
import { db } from '../databases/firebase';

const COLLECTION_NAME = 'tasks';

const getAllTasks = async(): Promise<TaskDTO[]> => {
  try {
    const allTask: ResponseTaskDTO[] = [];
    const tasks = await db.collection(COLLECTION_NAME).get();
    tasks.forEach((doc: any) => {
      allTask.push({
        id: doc.id, 
        ...doc.data()
      });
    })
    return allTask;
  } catch (error: any) {
    return error.message;
  }
};

const createTask = async(newTask: TaskDTO): Promise<TaskDTO | string> => {
  try {
    const task = db.collection(COLLECTION_NAME).doc();
    task.set(newTask);
    return newTask;
  } catch (error: any) {
    return error.message;
  }
};

const updateTask = async(taskId: string, taskData: TaskDTO): Promise<TaskDTO | string> => {
  try {
    const task = db.collection(COLLECTION_NAME).doc(taskId);
    const taskCurrentData = (await task.get()).data() || {}
    const taskUpdated: TaskDTO = {
      title: taskData.title || taskCurrentData.title,
      description: taskData.description || taskCurrentData.description,
      status: taskData.status || taskCurrentData.status
    }
    await task.set(taskUpdated);
    return taskUpdated;
  } catch (error: any) {
    return error.message;
  }  
};

const deleteTask = async(taskId: string): Promise<string> => {
  try {
    const task = db.collection(COLLECTION_NAME).doc(taskId);
    
    await task.delete();
    return 'Task deleted successfully';
  } catch (error: any) {
    return error.message;
  }  
};

export default {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
};