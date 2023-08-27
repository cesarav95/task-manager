# Atom Task Manager Challenge

This is an API for
# Tech Stack

For develop this challenge was used the following tecnologies:
<ol>
  <li> Node JS- Express. </li>
  <li>Firestore</li>
</ol>

# How to run
1. Rename file `.env.example` to `.env`, its important for load environments variables.
2. If you want to run locally run the following commands:
    ```
    # For transaction-api
    cd task-api
    npm install
    npm run dev
    ```
3. Also is available in: <a href="https://api-task-manager-one.vercel.app/api/tasks" target="_blank">https://api-task-manager-one.vercel.app/api/tasks</a>

# Resources

1. In REST API is available the following recources:

  - `GET` <a href="https://api-task-manager-one.vercel.app/api/tasks" target="_blank">https://api-task-manager-one.vercel.app/api/tasks</a> returnthe list of tasks.
  - `POST` <a target="_blank">https://api-task-manager-one.vercel.app/api/tasks</a> create a new task and return the created task , the JSON that should be send must have the following structure:

    ```json
    {
      "title": "Example",
      "description": "Description",
      "status": "completed" // completed or pendding
    }
    ```
  - `PUT` <a target="_blank">https://api-task-manager-one.vercel.app/api/tasks/:taskId</a> update a task
    ```json
    {
      "title": "Example",
      "description": "Description",
      "status": "completed" // completed or pendding
    }
    ```
  - `DELETE` <a target="_blank">https://api-task-manager-one.vercel.app/api/tasks/:taskId</a> delete a task

2.  The frontend application that uses this api can be found at the following link: <a href="https://app-task-manager.vercel.app/tasks/index" target="_blank">https://app-task-manager.vercel.app/tasks/index</a> 

And the repository is: <a href="https://github.com/cesarav95/app-task-manager.git" target="_blank">https://github.com/cesarav95/app-task-manager.git</a>