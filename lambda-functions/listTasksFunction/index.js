const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
  const params = {
    TableName: 'Tasks'
  };

  const result = await dynamodb.scan(params).promise();

  return { statusCode: 200, body: JSON.stringify(result.Items) };
};
