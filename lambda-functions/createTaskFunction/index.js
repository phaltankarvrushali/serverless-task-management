const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: 'Tasks',
    Item: {
      taskId: event.taskId,
      taskName: event.taskName,
      taskDescription: event.taskDescription,
      taskStatus: event.taskStatus
    }
  };

  await dynamodb.put(params).promise();

  return { statusCode: 200, body: 'Task created successfully' };
};
