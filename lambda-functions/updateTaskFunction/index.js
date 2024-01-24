const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: 'Tasks',
    Key: { taskId: event.taskId },
    UpdateExpression: 'SET taskStatus = :status',
    ExpressionAttributeValues: { ':status': event.taskStatus },
    ReturnValues: 'UPDATED_NEW'
  };

  const result = await dynamodb.update(params).promise();

  return { statusCode: 200, body: JSON.stringify(result.Attributes) };
};
