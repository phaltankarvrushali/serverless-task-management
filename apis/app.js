const express = require('express');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const lambda = new AWS.Lambda();

app.use(express.json());

app.post('/create-task', async (req, res) => {
    try {
        const requestData = req.body;

        const lambdaParams = {
            FunctionName: 'CreateTaskFunction',
            InvocationType: 'RequestResponse',
            Payload: JSON.stringify(requestData)
        };

        const result = await lambda.invoke(lambdaParams).promise();

        const responseBody = JSON.parse(result.Payload);

        res.json(responseBody);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/list-tasks', async (req, res) => {
    try {
        const lambdaParams = {
            FunctionName: 'ListTasksFunction',
            InvocationType: 'RequestResponse'
        };

        const result = await lambda.invoke(lambdaParams).promise();

        const responseBody = JSON.parse(result.Payload);
        res.json(responseBody);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/update-task', async (req, res) => {
    try {
        const requestData = req.body;

        const lambdaParams = {
            FunctionName: 'UpdateTaskFunction',
            InvocationType: 'RequestResponse',
            Payload: JSON.stringify(requestData)
        };

        const result = await lambda.invoke(lambdaParams).promise();

        const responseBody = JSON.parse(result.Payload);

        res.json(responseBody);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = app;
