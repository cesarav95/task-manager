export type TaskStatus = 'completed' | 'pending';

export interface TaskDTO {
  title: string;
  description: string;
  status: TaskStatus;
}

export interface ResponseTaskDTO {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}