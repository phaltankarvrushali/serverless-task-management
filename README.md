# serverless-task-management
Serverless task management using AWS Lambda, AWS DynamoDB and NodeJS. The app allows users to create, list, and update tasks using REST APIs.

Tech Used:
AWS Lambda: Service to run backend functions
AWS DynamoDB: Store task details
Node.js: For server-side development
Express.js: Web app framework for Node.js
AWS SDK: For communication with AWS services

How to use the project:
1. Clone the repository
2. Set up your AWS credentials
3. Install dependencies:
   npm install
4. Create lambda functions:

Create task function:
    aws lambda create-function \
    --function-name CreateTaskFunction \
    --runtime nodejs14.x \
    --handler index.handler \
    --zip-file fileb://createTaskFunction.zip \
    --role arn:aws:iam::<your-account>:role/<AWS Lambda role>

List task function:
    aws lambda create-function \
    --function-name ListTasksFunction \
    --runtime nodejs14.x \
    --handler index.handler \
    --zip-file fileb://listTasksFunction.zip \
    --role arn:aws:iam::<your-account>:role/<AWS Lambda role>

Update task function:
    aws lambda create-function \
    --function-name UpdateTaskFunction \
    --runtime nodejs14.x \
    --handler index.handler \
    --zip-file fileb://updateTaskFunction.zip \
    --role arn:aws:iam::<your-account>:role/<AWS Lambda role>

5. Run the application 
   node server.js

API Endpoints

1. Create Task: POST /create-task
curl -X POST -H "Content-Type: application/json" -d '{"taskId": "1", "taskName": "Study", "taskDescription": "Description", "taskStatus": "InProgress"}' http://localhost:3000/create-task

2. List Tasks: GET /list-tasks
curl http://localhost:3000/list-tasks

3. Update Task: PUT /update-task
curl -X PUT -H "Content-Type: application/json" -d '{"taskId": "1", "taskStatus": "Completed"}' http://localhost:3000/update-task

.env file:
AWS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
