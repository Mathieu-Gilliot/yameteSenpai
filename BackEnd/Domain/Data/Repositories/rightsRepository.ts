import { IRight } from './../../../Interfaces/IRights';
import { DbConnection } from '../dbConnection';
import * as mongodb from 'mongodb';


export class RightsRepository {

    private instance = DbConnection.getInstance();
    private connection = this.instance.connectMongo();

    public async getRightByName(rightName: string): Promise<IRight|Error> {
        try {
            const client: mongodb.MongoClient = await this.connection;
            const rightsCollection: mongodb.Collection<IRight> = client.db(process.env.DB_NAME).collection('Rights');
            return rightsCollection.findOne({ name: rightName });
        } catch (err) {
            return new Error('[getRightByName] Une erreur est survenue lors de la recherche de droit')
        }
    }

    public async getRightById(rightId : any): Promise<IRight|Error>{
        try{

        }catch(err){
            return new Error('[getRightByID] Une erreur est survenue lors de la recherche de droit')
        }
    }

    public async createRight(rightToCreate: any): Promise<Boolean> {
        try {
            const client: mongodb.MongoClient = await this.connection;
            const rightsCollection: mongodb.Collection<IRight> = client.db(process.env.DB_NAME).collection('Rights');
            rightsCollection.insertOne(rightToCreate);
            return true;
        } catch (err) {
            return false;
        }

    }

}