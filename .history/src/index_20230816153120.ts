import { dynamodbCreateTable } from "./aws";

const vendorsTableParams: AWS.DynamoDB.CreateTableInput = {
    TableName: 'vendors',
    KeySchema: [
        {AttributeName:'twitter'}
    ]
};

dynamodbCreateTable()