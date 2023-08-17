import { dynamodbCreateTable } from "./aws";

const vendorsTableParams: AWS.DynamoDB.CreateTableInput = {
    Table
};

dynamodbCreateTable()