import { RightsController } from './../../../Controllers/rightsController';
import { DomainService } from './../domainServices';
import { IRight } from './../../../Interfaces/IRights';
import { DbConnection } from '../dbConnection';
import * as mongodb from 'mongodb';


export class RightsRepository {

    private instance = DbConnection.getInstance();
    private connection = this.instance.connectMongo();
    private collection = "Rights";
    private domainService = new DomainService()

    public async getRightByName(rightName: string): Promise<IRight | Error> {
        try {
            const rightsCollection: mongodb.Collection<IRight> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (rightsCollection instanceof Error) {
                throw rightsCollection;
            } else {
                return rightsCollection.findOne({ name: rightName });
            }

        } catch (err) {
            return new Error('[getRightByName] Une erreur est survenue lors de la recherche de droit' + err);
        }
    }

    public async getRightById(rightId: any): Promise<IRight | Error> {
        try {
            const rightsCollection: mongodb.Collection<IRight> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (rightsCollection instanceof Error) {
                throw rightsCollection;
            } else {
                const right = rightsCollection.findOne({ _id: new mongodb.ObjectID(rightId) });
                return right;
            }
        } catch (err) {
            return new Error('[getRightByID] Une erreur est survenue lors de la recherche de droit' + err);
        }
    }

    public async createRight(rightToCreate: any): Promise<Boolean> {
        try {
            const rightsCollection: mongodb.Collection<IRight> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (rightsCollection instanceof Error) {
                throw rightsCollection;
            } else {
                rightsCollection.insertOne(rightToCreate);
                return true;
            }
        } catch (err) {
            return false;
        }
    }

    public async getAllRights(): Promise<mongodb.Cursor<IRight> | Error> {
        try {
            const rightsCollection: mongodb.Collection<IRight> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (rightsCollection instanceof Error) {
                throw rightsCollection;
            } else {
                return rightsCollection.find();
            }
        } catch (err) {
            return err
        }
    }

    public async updateRight(id: any, fieldToUpdate, newValue): Promise<Boolean | Error> {
        try {
            const rightsCollection: mongodb.Collection<IRight> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (rightsCollection instanceof Error) {
                throw rightsCollection;
            } else {
                let updated: boolean;
                switch (fieldToUpdate) {     // switch inutile mais si évolution du schéma, plus facile à implémenter
                    case 'name': rightsCollection.updateOne({ _id: new mongodb.ObjectID(id.toString()) }, { name: newValue })
                        updated = true;
                        break;
                    default: updated = false;
                }
                return updated;
            }
        } catch (err) {
            return err;
        }
    }

    public async deleteRight(id: any): Promise<Boolean> {
        try {
            const rightsCollection: mongodb.Collection<IRight> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (rightsCollection instanceof Error) {
                throw rightsCollection;
            } else {
                rightsCollection.deleteOne({ _id: new mongodb.ObjectID(id.toString()) });
                return true;
            }
        } catch (err) {
            return false;
        }
    }

    public async deleteManyRights(ids: Array<any>): Promise<Boolean> {
        try {
            const rightsCollection: mongodb.Collection<IRight> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (rightsCollection instanceof Error) {
                throw rightsCollection;

            } else {
                const objectIds = ids.map(id => new mongodb.ObjectID(id.toString()));
                rightsCollection.deleteMany({ _id: { $in: objectIds } });
                return true;
            }
        } catch (err) {
            return false;
        }
    }
}