import * as mongodb from "mongodb";
import * as dotenv from 'dotenv';
import * as dotenvExpand from "dotenv-expand";



export class DbConnection {
    private static connectionInstance: DbConnection;
    private dotenvConfig = dotenv.config();
    private expandDotenv = dotenvExpand(this.dotenvConfig)

    private constructor() {

    }
    public static getInstance(): DbConnection {
        if (!DbConnection.connectionInstance) {
            DbConnection.connectionInstance = new DbConnection();
            console.log("Je suis unique")
        }
        return DbConnection.connectionInstance;
    }
    public async connectMongo() : Promise<mongodb.MongoClient|Error> {
        try {
            let promise: Promise<mongodb.MongoClient> = new Promise((resolve, reject) => {
                mongodb.MongoClient.connect(`${process.env.CONNECTION_STRING}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
                    if (err) {
                        reject('Connection failed')
                        throw new Error('Cette erreur est survenue :' + err);
                    }
                    resolve(client)
                });
            })
            return promise
        } catch (err) {
            return err;
        }

    }


}