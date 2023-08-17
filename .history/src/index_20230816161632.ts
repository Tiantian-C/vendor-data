import { dynamodbCreateTable, dynamodbDescribeTable } from "./aws";

// const vendorsTableParams: AWS.DynamoDB.CreateTableInput = {
//     TableName: 'vendors',
//     KeySchema: [
//         {AttributeName:'twitterId',KeyType:'HASH'}
//     ],
//     AttributeDefinitions: [
//         {AttributeName:'twitterId',AttributeType:'S'}
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 10,
//         WriteCapacityUnits:10,
//     }
// };

// dynamodbCreateTable(vendorsTableParams);

const init = async () => {
    await dynamodbDescribeTable('vendors')
}

init();