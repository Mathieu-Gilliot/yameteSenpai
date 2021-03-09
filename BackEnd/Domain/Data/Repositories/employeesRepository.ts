import { IEmployee } from './../../../Interfaces/IEmployee';
import { DomainService } from './../domainServices';
import { DbConnection } from '../dbConnection';
import * as mongodb from 'mongodb';




export class EmployeesRepository {

    private instance = DbConnection.getInstance();
    private connection = this.instance.connectMongo();
    private collection = "Employees";
    private domainService = new DomainService();


    public async createEmployee(employeeToCreate: IEmployee): Promise<Boolean> {
        try {
            const employeesCollection: mongodb.Collection<IEmployee> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (employeesCollection instanceof Error) {
                throw employeesCollection;
            } else {
                employeesCollection.insertOne(employeeToCreate);
                return true;
            }
        } catch (err) {
            return false;
        }
    }

    public async getEmployeeById(id: any): Promise<IEmployee | Error> {
        try {
            const employeesCollection: mongodb.Collection<IEmployee> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (employeesCollection instanceof Error) {
                throw employeesCollection;
            } else {
                return employeesCollection.findOne({ _id: new mongodb.ObjectID(id.toString()) });
            }
        } catch (err) {
            return err;
        }
    }

    public async getAllEmployees(): Promise<mongodb.Cursor<IEmployee> | Error> {
        try {
            const employeesCollection: mongodb.Collection<IEmployee> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (employeesCollection instanceof Error) {
                throw employeesCollection;
            } else {
                return employeesCollection.find();
            }
        } catch (err) {
            return err;
        }
    }

    public async removeEmployee(idToRemove: any): Promise<Boolean> {
        try {
            const employeesCollection: mongodb.Collection<IEmployee> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (employeesCollection instanceof Error) {
                throw employeesCollection;
            } else {
                employeesCollection.deleteOne({ _id: new mongodb.ObjectID(idToRemove.toString()) });
                return true;
            }
        } catch (err) {
            return false;
        }
    }

    public async removeMultipleEmployees(idsToRemove: Array<any>): Promise<Boolean> {
        try {
            const employeesCollection: mongodb.Collection<IEmployee> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (employeesCollection instanceof Error) {
                throw employeesCollection;
            } else {
                const objectIdsToRemove = idsToRemove.map(id => new mongodb.ObjectID(id.toString()))
                employeesCollection.deleteMany({ _id: { $in: objectIdsToRemove } });
                return true;
            }
        } catch (err) {
            return false;
        }
    }

    public async updateEmployee(id: any, fieldToUpdate: string, newValue: any): Promise<Boolean> {
        try {
            const employeesCollection: mongodb.Collection<IEmployee> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (employeesCollection instanceof Error) {
                throw employeesCollection;
            } else {
                const mongoId = new mongodb.ObjectID(id.toString());
                let updated: boolean;
                switch (fieldToUpdate) {
                    case 'name':
                        try {
                            employeesCollection.updateOne({ _id: mongoId }, { $set: { name: newValue } });
                            updated = true;
                        } catch (err) {
                            updated = false;
                        }
                        break;
                    case 'firstName':
                        try {
                            employeesCollection.updateOne({ _id: mongoId }, { $set: { firstName: newValue } });
                            updated = true;
                        } catch (err) {
                            updated = false;
                        }
                        break;
                    case 'isManager':
                        try {
                            employeesCollection.updateOne({ _id: mongoId }, { $set: { isManager: newValue } });
                            updated = true;
                        } catch (err) {
                            updated = false;
                        }
                        break;
                    case 'specialty':
                        try {
                            employeesCollection.updateOne({ _id: mongoId }, { $set: { specialty: newValue } });
                            updated = true;
                        } catch (err) {
                            updated = false;
                        }
                        break;
                    case 'mobility':
                        try {
                            employeesCollection.updateOne({ _id: mongoId }, { $set: { mobility: newValue } });
                            updated = true;
                        } catch (err) {
                            updated = false;
                        }
                        break;
                    default: updated = false;
                }
                return updated;
            }
        } catch (err) {
            return false;
        }
    }

    public async getEmployeeByNameAndFirstName(name:string,firstName:string) : Promise<IEmployee | Error>{
        try {
            const employeesCollection: mongodb.Collection<IEmployee> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (employeesCollection instanceof Error) {
                throw employeesCollection;
            } else {

                return employeesCollection.findOne({ name:name,firstName:firstName });
            }
        } catch (err) {
            return err;
        }
    }
}