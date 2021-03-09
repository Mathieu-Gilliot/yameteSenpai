import { Services } from './../../Services/handlers';
import { DomainService } from './../domainServices';
import { DbConnection } from '../dbConnection';
import * as mongodb from 'mongodb';
import { IFormula } from '../../../Interfaces/IFormula';

export class FormulaRepository {

    private instance = DbConnection.getInstance();
    private connection = this.instance.connectMongo();
    private collection = "Formulas";
    private domainService = new DomainService();

    public async createFormula(formulaToCreate: IFormula): Promise<Boolean> {
        try {
            const formulasCollection: mongodb.Collection<IFormula> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (formulasCollection instanceof Error) {
                throw formulasCollection;
            } else {
                formulasCollection.insertOne(formulaToCreate);
                return true;
            }

        } catch (err) {
            return false;
        }
    }

    public async deleteFormula(formulaToDelete: any): Promise<Boolean> {
        try {
            const formulasCollection: mongodb.Collection<IFormula> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (formulasCollection instanceof Error) {
                throw formulasCollection;
            } else {
                formulasCollection.deleteOne({ _id: new mongodb.ObjectID(formulaToDelete.toString()) });
                return true;
            }
        } catch (err) {
            return false;
        }
    }

    public async deleteManyFormulas(formulasToDelete: Array<any>): Promise<Boolean> {
        try {
            const formulasCollection: mongodb.Collection<IFormula> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (formulasCollection instanceof Error) {
                throw formulasCollection;
            } else {
                const objectIds: Array<mongodb.ObjectID> = formulasToDelete.map(id => new mongodb.ObjectID(id));
                formulasCollection.deleteMany({ _id: { $in: objectIds } });
                return true;
            }
        } catch (err) {
            return false;
        }
    }

    public async getFormulaByTitle(titleToRetrieve: string): Promise<IFormula | Error> {
        try {
            const formulasCollection: mongodb.Collection<IFormula> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (formulasCollection instanceof Error) {
                throw formulasCollection;
            } else {
                const formula = formulasCollection.findOne({ title: titleToRetrieve });
                return formula;
            }
        } catch (err) {
            return new Error('[getFormulaByName]: Une erreur est survenue lors de la recherche de la formule');
        }
    }

    public async getFormulaById(idToRetrieve: string): Promise<IFormula | Error> {
        try {
            const formulasCollection: mongodb.Collection<IFormula> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (formulasCollection instanceof Error) {
                throw formulasCollection;
            } else {
                const formula = await formulasCollection.findOne({ _id: new mongodb.ObjectID(idToRetrieve) });
                return formula;
            }
        } catch (err) {
            return new Error('[getFormulaById]: Une erreur est survenue lors de la recherche de la formule');
        }
    }

    public async getAllFormulas(): Promise<mongodb.Cursor<IFormula> | Error> {
        try {
            const formulasCollection: mongodb.Collection<IFormula> | Error = await this.domainService.getCollection(this.connection, this.collection);
            if (formulasCollection instanceof Error) {
                throw formulasCollection;
            } else {
                const formulas = await formulasCollection.find();
                return formulas;
            }
        } catch (err) {
            return new Error('[getAllFormulas]: Une erreur est survenue lors de la recherche des formules');
        }
    }

    public async updateFormula(id: any, fieldToUpdate, newValue): Promise<Boolean> {
        const formulaCollection: mongodb.Collection<IFormula> | Error = await this.domainService.getCollection(this.connection, this.collection);
        if (formulaCollection instanceof Error) {
            throw formulaCollection;
        } else {
            const mongoId = new mongodb.ObjectID(id.toString());
            let updated: boolean;
            switch (fieldToUpdate) {
                case 'title':
                    try {
                        formulaCollection.updateOne({ _id: mongoId }, { $set: { title: newValue } });
                        updated = true;
                    } catch (err) {
                        updated = false;
                    }
                    break;
                case 'services':
                    try {
                        formulaCollection.updateOne({ _id: mongoId }, { $set: { services: newValue } });
                        updated = true;
                    } catch (err) {
                        updated = false;
                    }
                    break;
                case 'duration':
                    try {
                        formulaCollection.updateOne({ _id: mongoId }, { $set: { duration: newValue } });
                        updated = true;
                    } catch (err) {
                        updated = false;
                    }
                    break;
                case 'price':
                    try {
                        formulaCollection.updateOne({ _id: mongoId }, { $set: { price: newValue } });
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