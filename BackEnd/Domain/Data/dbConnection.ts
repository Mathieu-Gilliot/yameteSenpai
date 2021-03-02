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
    public  connectMongo(){

     let promise = new Promise((resolve,reject)=>{
         mongodb.MongoClient.connect(`${process.env.CONNECTION_STRING}`, { useNewUrlParser: true, useUnifiedTopology: true },(err,client)=>{
            if(err){
                 reject(new Error('Cette erreur est survenue :' + err))
            }

          resolve(client)
        });
     })
     return promise
    }


}