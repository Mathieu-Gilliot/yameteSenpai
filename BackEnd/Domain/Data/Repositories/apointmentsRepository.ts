import { DomainService } from './../domainServices';
import { DbConnection } from '../dbConnection';
import * as mongodb from 'mongodb';
import { IApointment } from '../../../Interfaces/IApointment';


export class ApointmentsRepository {

    private instance = DbConnection.getInstance();
    private connection = this.instance.connectMongo();
    private collection = "Apointments";
    private domainService = new DomainService();

    public async createApointment(apointmentToCreate:IApointment ): Promise<Boolean> {
        try {
            const apointmentCollection: mongodb.Collection<IApointment> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (apointmentCollection instanceof Error) {
                throw apointmentCollection;
            } else {
                apointmentCollection.insertOne(apointmentToCreate);
                return true;
            }

        } catch (err) {
            return false;
        }
    }
    public async getApointment(userID: any): Promise<IApointment | Error> {
        try {
            const apointmentCollection: mongodb.Collection<IApointment> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (apointmentCollection instanceof Error) {
                throw apointmentCollection;
            } else {
                return apointmentCollection.findOne({ _id: new mongodb.ObjectID(userID.toString()) });
            }
        } catch (err) {
            return new Error("La recherche de l'objet d'apointmententification a échoué");
        }
    }
    public async getAllApointment(): Promise<mongodb.Cursor<IApointment> | Error> {
        try {
            const apointmentCollection: mongodb.Collection<IApointment> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (apointmentCollection instanceof Error) {
                throw apointmentCollection;
            } else {
                return apointmentCollection.find();
            }
        } catch (err) {
            return new Error("La recherche des objets d'apointmententification a échoué");
        }
    }
    public async removeApointment(apointmentIdToRemove: any): Promise<Boolean> {
        try {
            const apointmentCollection: mongodb.Collection<IApointment> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (apointmentCollection instanceof Error) {
                throw apointmentCollection;
            } else {
                apointmentCollection.findOneAndDelete({ _id: new mongodb.ObjectID(apointmentIdToRemove.toString()) });
                return true;
            }
        } catch (err) {
            return false;
        }
    }
    public async removeMultipleApointment(apointmentIdsToRemove: Array<any>): Promise<Boolean> {
        try {
            const apointmentCollection: mongodb.Collection<IApointment> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (apointmentCollection instanceof Error) {
                throw apointmentCollection;
            } else {
                const objectIds: Array<mongodb.ObjectID> = apointmentIdsToRemove.map(id => new mongodb.ObjectID(id));
                apointmentCollection.deleteMany({ _id: { $in: objectIds } });
                return true;
            }
        } catch (err) {
            return false;
        }
    }

}