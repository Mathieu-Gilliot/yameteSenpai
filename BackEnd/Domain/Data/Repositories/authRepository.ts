import { AuthDTO } from './../../DTO/authDTO';
import { IAuth } from './../../../Interfaces/IAuth';
import { DbConnection } from '../dbConnection';
import * as mongodb from 'mongodb';


export class AuthRepository {

    private instance = DbConnection.getInstance();
    private connection = this.instance.connectMongo();

    public async createAuth(data: AuthDTO): Promise<Boolean> {
        try {
            const client: mongodb.MongoClient = await this.connection;
            const authCollection: mongodb.Collection<IAuth> = client.db(process.env.DB_NAME).collection('Auth');
            authCollection.insertOne(data);
            return true;
        } catch (err) {
            return false;
        }
    }
    public async getAuth(userID: any): Promise<IAuth | Error> {
        try {
            const client: mongodb.MongoClient = await this.connection;
            const authCollection: mongodb.Collection<IAuth> = client.db(process.env.DB_NAME).collection('Auth');
            return authCollection.findOne({ _id: new mongodb.ObjectID(userID.toString()) });
        } catch (err) {
            return new Error("La recherche de l'objet d'authentification a échoué");
        }
    }
    public async getAllAuth(): Promise<mongodb.Cursor<IAuth> | Error> {
        try {
            const client: mongodb.MongoClient = await this.connection;
            const authCollection: mongodb.Collection<IAuth> = client.db(process.env.DB_NAME).collection('Auth');
            return authCollection.find();
        } catch (err) {
            return new Error("La recherche des objets d'authentification a échoué");
        }
    }
    public async removeAuth(authIdToRemove: any): Promise<Boolean> {
        try {
            const client: mongodb.MongoClient = await this.connection;
            const authCollection: mongodb.Collection<IAuth> = client.db(process.env.DB_NAME).collection('Auth');
            authCollection.findOneAndDelete({ _id: new mongodb.ObjectID(authIdToRemove.toString()) });
            return true;
        } catch (err) {
            return false;
        }
    }
    public async removeMultipleAuth(authIdsToRemove: Array<any>): Promise<Boolean> {
        try {
            const client: mongodb.MongoClient = await this.connection;
            const authCollection: mongodb.Collection<IAuth> = client.db(process.env.DB_NAME).collection('Auth');
            const objectIds: Array<mongodb.ObjectID> = authIdsToRemove.map(id => new mongodb.ObjectID(id));
            authCollection.deleteMany({ _id: { $in: objectIds } });
            return true;
        } catch (err) {
            return false;
        }
    }
    public async updateAuth(id: any, fieldToUpdate, newValue): Promise<Boolean> {
        const client: mongodb.MongoClient = await this.connection;
        const authCollection: mongodb.Collection<IAuth> = client.db(process.env.DB_NAME).collection('Auth');
        const mongoId = new mongodb.ObjectID(id.toString());
        let updated: boolean;
        switch (fieldToUpdate) {
            case 'email':
                try {
                    authCollection.updateOne({ _id: mongoId }, { $set: { email: newValue } });
                    updated = true;
                } catch (err) {
                    updated = false;
                }
                break;
            case 'passWord':
                try {
                    authCollection.updateOne({ _id: mongoId }, { $set: { password: newValue } });
                    updated = true;
                } catch (err) {
                    updated = false;
                }
                break;
            default: updated = false;
                break;
        }
        return updated;
    }
   
}