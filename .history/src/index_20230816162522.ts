import { dynamodbCreateTable, dynamodbDescribeTable } from "./aws";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const init = async () => {
  const vendorsTableName = "vendors";

  const vendorsTable = await dynamodbDescribeTable(vendorsTableName);
    
  if (!(vendorsTable instanceof Error)) {
  }
  const vendorsTableParams: AWS.DynamoDB.CreateTableInput = {
    TableName: "vendors",
    KeySchema: [{ AttributeName: "twitterId", KeyType: "HASH" }],
    AttributeDefinitions: [{ AttributeName: "twitterId", AttributeType: "S" }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10,
    },
  };

  await dynamodbCreateTable(vendorsTableParams);
  await delay(12000);
};


