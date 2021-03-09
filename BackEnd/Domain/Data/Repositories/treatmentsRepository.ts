import { ITreatment } from './../../../Interfaces/ITreatment';
import { DomainService } from './../domainServices';
import { DbConnection } from '../dbConnection';
import * as mongodb from 'mongodb';



export class TreatmentRepository {

    private instance = DbConnection.getInstance();
    private connection = this.instance.connectMongo();
    private collection = "Treatments";
    private domainService = new DomainService();

    public async createTreatment(treatmentToCreate: ITreatment): Promise<Boolean> {
        try {
            const treatmentCollection: mongodb.Collection<ITreatment> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (treatmentCollection instanceof Error) {
                throw treatmentCollection;
            } else {
                treatmentCollection.insertOne(treatmentToCreate);
                return true;
            }

        } catch (err) {
            return false;
        }
    }
    public async getTreatment(id: any): Promise<ITreatment | Error> {
        try {
            const treatmentCollection: mongodb.Collection<ITreatment> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (treatmentCollection instanceof Error) {
                throw treatmentCollection;
            } else {
                return treatmentCollection.findOne({ _id: new mongodb.ObjectID(id.toString()) });
            }
        } catch (err) {
            return new Error("La recherche du soin a échoué");
        }
    }
    public async getTreatmentByName(name: string): Promise<ITreatment | Error> {
        try {
            const treatmentCollection: mongodb.Collection<ITreatment> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (treatmentCollection instanceof Error) {
                throw treatmentCollection;
            } else {
                return treatmentCollection.findOne({ name: name });
            }
        } catch (err) {
            return new Error("La recherche du soin a échoué");
        }
    }
    public async getAllTreatments(): Promise<mongodb.Cursor<ITreatment> | Error> {
        try {
            const treatmentCollection: mongodb.Collection<ITreatment> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (treatmentCollection instanceof Error) {
                throw treatmentCollection;
            } else {
                return treatmentCollection.find();
            }
        } catch (err) {
            return new Error("La recherche des objets d'treatmententification a échoué");
        }
    }
    public async removeTreatment(treatmentIdToRemove: any): Promise<Boolean> {
        try {
            const treatmentCollection: mongodb.Collection<ITreatment> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (treatmentCollection instanceof Error) {
                throw treatmentCollection;
            } else {
                treatmentCollection.findOneAndDelete({ _id: new mongodb.ObjectID(treatmentIdToRemove.toString()) });
                return true;
            }
        } catch (err) {
            return false;
        }
    }
    public async removeMultipleTreatments(treatmentIdsToRemove: Array<any>): Promise<Boolean> {
        try {
            const treatmentCollection: mongodb.Collection<ITreatment> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (treatmentCollection instanceof Error) {
                throw treatmentCollection;
            } else {
                const objectIds: Array<mongodb.ObjectID> = treatmentIdsToRemove.map(id => new mongodb.ObjectID(id));
                treatmentCollection.deleteMany({ _id: { $in: objectIds } });
                return true;
            }
        } catch (err) {
            return false;
        }
    }
    public async updateTreatment(id: any, fieldToUpdate, newValue): Promise<Boolean> {
        const treatmentCollection: mongodb.Collection<ITreatment> | Error = await this.domainService.getCollection(this.connection, this.collection);
        if (treatmentCollection instanceof Error) {
            throw treatmentCollection;
        } else {
            const mongoId = new mongodb.ObjectID(id.toString());
            let updated: boolean;
            switch (fieldToUpdate) {
                case 'name':
                    try {
                        treatmentCollection.updateOne({ _id: mongoId }, { $set: { name: newValue } });
                        updated = true;
                    } catch (err) {
                        updated = false;
                    }
                    break;

                default: updated = false;
            }
            return updated;
        }
    }
}