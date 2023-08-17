import { dynamodbCreateTable } from "./aws";

const vendorsTableParams: AWS.DynamoDB.CreateTableInput = {
    TableName:''
};

dynamodbCreateTable()