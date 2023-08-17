import AWS from 'aws-sdk';
import { AWSRegions } from './types/aws';

AWS.config.update({ region: AWSRegions.US_EAST_1 });

const { DynamoDB } = AWS;

const dynamodb = new DynamoDB();

//create a table
export const dynamodbCreateTable = async (params:AWS.DynamoDB.CreateTableInput) => {
    try {
        
    } catch (e) {
        if (e instanceof Error) {
            throw e
        }
        throw new Error('dynamodbCreateTable error ')
    }
}

//describe a table 


//delete a table


//create a record