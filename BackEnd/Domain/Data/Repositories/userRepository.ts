import { userResponseDTO } from './../../DTO/userResponseDTO';
import { DbConnection } from '../dbConnection';
import * as mongodb from 'mongodb';
import { IUserDTO } from '../../../Interfaces/IUser';
import { userParameterDTO } from '../../DTO/userParameterDTO';


export class userRepository {

    private instance = DbConnection.getInstance();
    private connection = this.instance.connectMongo();


    public async getUsers(): Promise<mongodb.Cursor<IUserDTO> | Error> {
        try {
            const client: mongodb.MongoClient = await this.connection;
            const userCollection: mongodb.Collection<IUserDTO> = client.db(process.env.DB_NAME).collection('Users');
            const users: mongodb.Cursor<IUserDTO> = userCollection.find();
            return users;
        } catch (err) {
            return new Error('[getUsers] Une erreur est survenue lors de la requête')
        }
    }

    public async createUser(userToCreate: userResponseDTO): Promise<boolean | string> {
        try {
            const client: mongodb.MongoClient = await this.connection;
            const userCollection: mongodb.Collection<IUserDTO> = client.db(process.env.DB_NAME).collection('Users');
            const user = await userCollection.insertOne(userToCreate);
            return user.insertedId;
        } catch (err) {
            return false;
        };
    }

    public async getUserByID(id: any): Promise<IUserDTO | Error> {
        try {
            const client: mongodb.MongoClient = await this.connection;
            const userCollection: mongodb.Collection<IUserDTO> = client.db(process.env.DB_NAME).collection('Users');
            const result: IUserDTO = await userCollection.findOne({ _id: new mongodb.ObjectID(id.toString()) });
            return result;
        } catch (err) {
            console.log(err)
            return new Error('[getUserByID] Une erreur est survenue lors de la requête')
        }

    }

    public async removeUser(id: any): Promise<Boolean> {
        try {
            const client: mongodb.MongoClient = await this.connection;
            const userCollection: mongodb.Collection<IUserDTO> = client.db(process.env.DB_NAME).collection('Users');
            userCollection.findOneAndDelete({ _id: new mongodb.ObjectID(id.toString()) });
            return true;
        } catch (err) {
            return false;
        }
    }

    public async removeUsers(ids: Array<any>): Promise<Boolean> {
        try {
            const client: mongodb.MongoClient = await this.connection;
            const userCollection: mongodb.Collection<IUserDTO> = client.db(process.env.DB_NAME).collection('Users');
            const objectIds: Array<mongodb.ObjectID> = ids.map(id => new mongodb.ObjectID(id));
            userCollection.deleteMany({ _id: { $in: objectIds } });
            return true;
        } catch (err) {
            return false;
        }
    }

    public async updateUser(id: any, fieldToUpdate, newValue) : Promise<Boolean> {
        const client: mongodb.MongoClient = await this.connection;
        const userCollection: mongodb.Collection<IUserDTO> = client.db(process.env.DB_NAME).collection('Users');
        const mongoId = new mongodb.ObjectID(id.toString());
        let updated: boolean;
        switch (fieldToUpdate) {
            case 'name':
                try {
                    userCollection.updateOne({ _id: mongoId }, { $set: { name: newValue } });
                    updated = true;
                }catch(err){
                    updated = false;
                }
            break;
            case 'firstName':
                try {
                    userCollection.updateOne({ _id: mongoId }, { $set: { firstName: newValue } });
                    updated = true;
                }catch(err){
                    updated = false;
                }
                break;
            case 'phoneNumber':
                try {
                    userCollection.updateOne({ _id: mongoId }, { $set: { phoneNumber: newValue } });
                    updated = true;
                }catch(err){
                    updated = false;
                }
                break;
            default: updated = false;
        }
        return updated;
    }
}