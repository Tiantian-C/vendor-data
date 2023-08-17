import { dynamodbCreateTable, dynamodbDescribeTable } from "./aws";


const init = async () => {
    const vendorsTableName = "vendors";

    const vendorsTable = await dynamodbDescribeTable(vendorsTableName);

    
    const vendorsTableParams: AWS.DynamoDB.CreateTableInput = {
      TableName: "vendors",
      KeySchema: [{ AttributeName: "twitterId", KeyType: "HASH" }],
      AttributeDefinitions: [
        { AttributeName: "twitterId", AttributeType: "S" },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
      },
    };

}

dynamodbCreateTable(vendorsTableParams);

