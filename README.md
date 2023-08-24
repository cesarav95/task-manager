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

# Resources

1. In REST API is available the following recources:

  - `GET` <a href="http://localhost:3001/api/tasks" target="_blank">http://localhost:3001/api/tasks</a> returnthe list of tasks.
  - `POST` <a target="_blank">http://localhost:3001/api/tasks</a> create a new task and return the created task , the JSON that should be send must have the following structure:

    ```json
    {
      "title": "Example",
      "description": "Description",
      "status": "completed" // completed or pendding
    }
    ```
  - `PUT` <a target="_blank">http://localhost:3001/api/transaction/:taskId</a> update a task
    ```json
    {
      "title": "Example",
      "description": "Description",
      "status": "completed" // completed or pendding
    }
    ```
  - `DELETE` <a target="_blank">http://localhost:3001/api/transaction/:taskId</a> delete a task

