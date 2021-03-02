"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnection = void 0;
const mongodb = require("mongodb");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
class DbConnection {
    constructor() {
        this.dotenvConfig = dotenv.config();
        this.expandDotenv = dotenvExpand(this.dotenvConfig);
    }
    static getInstance() {
        if (!DbConnection.connectionInstance) {
            DbConnection.connectionInstance = new DbConnection();
            console.log("Je suis unique");
        }
        return DbConnection.connectionInstance;
    }
    connectMongo() {
        let promise = new Promise((resolve, reject) => {
            mongodb.MongoClient.connect(`${process.env.CONNECTION_STRING}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
                if (err) {
                    reject(new Error('Cette erreur est survenue :' + err));
                }
                resolve(client);
            });
        });
        return promise;
    }
}
exports.DbConnection = DbConnection;
//# sourceMappingURL=dbConnection.js.map