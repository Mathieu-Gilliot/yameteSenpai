import { InternalError } from './../../Services/Errors/internalError';
import { DomainService } from '../domainServices';
import { DbConnection } from '../dbConnection';
import * as mongodb from 'mongodb';
import { Interface } from 'readline';



export class CRD {

    protected instance = DbConnection.getInstance();
    protected connection = this.instance.connectMongo();
    protected collection :string;
    protected domainService = new DomainService();
    public interface : Interface;

    constructor(collection:string){
        this.collection = collection;

    }

    public async getAllItem(): Promise<mongodb.Cursor<any>|Error> {
        try {
            const Collection: mongodb.Collection<Interface> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (Collection instanceof Error) {
                throw Collection;
            } else {
                const items: mongodb.Cursor<Interface> = Collection.find();
                return items;
            }
        } catch (err) {
            return new Error('[getAllItem] Une erreur est survenue lors de la requête')
        }
    }

    public async createItem(itemToCreate: Interface): Promise<boolean | mongodb.ObjectID> {
        try {
            const Collection: mongodb.Collection<Interface> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (Collection instanceof Error) {
                throw Collection;
            } else {
                const item = await Collection.insertOne(itemToCreate);
                return item.insertedId;
            }
        } catch (err) {
            return false;
        };
    }

    public async getItemByID(id: any): Promise<Interface | Error> {
        try {
            const Collection: mongodb.Collection<Interface> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (Collection instanceof Error) {
                throw Collection;
            } else {
                const result: Interface = await Collection.findOne({ _id: new mongodb.ObjectID(id.toString()) });
                return result;
            }
        } catch (err) {
            console.log(err)
            return new Error('[getItemByID] Une erreur est survenue lors de la requête')
        }

    }

    public async removeOne(id: any): Promise<Boolean> {
        try {
            const Collection: mongodb.Collection<Interface> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (Collection instanceof Error) {
                throw Collection;
            } else {
                Collection.findOneAndDelete({ _id: new mongodb.ObjectID(id.toString()) });
            }
            return true;
        } catch (err) {
            return false;
        }
    }

    public async removeMultiple(ids: Array<any>): Promise<Boolean> {
        try {
            const Collection: mongodb.Collection<Interface> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (Collection instanceof Error) {
                throw Collection;
            } else {
                const objectIds: Array<mongodb.ObjectID> = ids.map(id => new mongodb.ObjectID(id));
                Collection.deleteMany({ _id: { $in: objectIds } });
                return true;
            }
        } catch (err) {
            return false;
        }
    }
}