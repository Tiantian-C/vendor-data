import AWS from 'aws-sdk';
import { AWSRegions } from './types/aws';

AWS.config.update({ region: AWSRegions.US_EAST_1 })


//create a table
export const dynamodbCreateTable = async (params:AWS.DynamoDB.CreateTableInput) => {
    
}

//describe a table 


//delete a table


//create a record