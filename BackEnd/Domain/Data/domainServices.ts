import * as mongodb from 'mongodb'
import { idText } from 'typescript';

export class DomainService{


    public getCollection= async(connection:Promise<mongodb.MongoClient|Error>,collectionName:string)=>{
        const client: mongodb.MongoClient|Error = await connection;
        if(client instanceof Error){
            return new Error("La connexion à la base de données a échoué")
        }else{
            const collection: mongodb.Collection = client.db(process.env.DB_NAME).collection(collectionName);
            return collection;
        }

    }
}