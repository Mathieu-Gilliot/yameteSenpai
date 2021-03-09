import { ITreatment } from './../../Interfaces/ITreatment';
import { TreatmentRepository } from './../Data/Repositories/treatmentsRepository';
import { FormulaSchema } from '../Services/Joi Schemas/formulasSchema';
import { IFormula } from '../../Interfaces/IFormula';
import { FormulaRepository } from '../Data/Repositories/formulasRepository';
import { extendedRequest } from '../../Interfaces/extendedRequest';
import { AuthError } from '../Services/Errors/authError';
import { CreationOkResponse } from '../Services/OkResponse/creationResponse';
import { SimpleOkResponse } from '../Services/OkResponse/simpleOkResponse';
import { InternalError } from '../Services/Errors/internalError';
import { BadRequestError } from '../Services/Errors/badRequestError';
import { Services } from '../Services/handlers';
import { Response, NextFunction } from "express";
import * as mongodb from 'mongodb';



export class FormulasManager {
    private badRequestError = new BadRequestError();
    private authError = new AuthError();
    private internalError = new InternalError();
    private simpleOkResponse = new SimpleOkResponse();
    private creationOkResponse = new CreationOkResponse();
    private services = new Services();
    private formulaRepository = new FormulaRepository();
    private formulaSchema = new FormulaSchema();
    private treatmentRepository = new TreatmentRepository();

    public async createFormula(req: extendedRequest, res: Response) {
        if (req.user) {
            const { error, value } = this.formulaSchema.createFormula.validate(req.body);
            if (!error) {
                const formulaExist = await this.formulaRepository.getFormulaByTitle(req.body.title);
                if (formulaExist instanceof Error) {
                    this.internalError.sendResponse(res, formulaExist)
                } else {
                    if (formulaExist != null) {
                        this.badRequestError.sendResponse(res, "Une formule existe déjà avec ce titre");
                    } else {
                        const createdFormula: Boolean = await this.formulaRepository.createFormula(req.body);
                        if (createdFormula) {
                            this.creationOkResponse.sendResponse(res, "Formule créée avec succès");
                        } else {
                            this.badRequestError.sendResponse(res, "La création de la formule a échoué");
                        }
                    }
                }
            } else {
                this.badRequestError.sendResponse(res, "Les informations fournies ne sont pas correctes");
            }
        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }

    public async deleteFormula(req: extendedRequest, res: Response) {
        if (req.user) {
            const { error, value } = this.formulaSchema.removeFormulaSchema.validate(req.body);
            if (!error) {
                const formulaRemove = await this.formulaRepository.deleteFormula(req.body.id);
                if (formulaRemove) {
                    this.simpleOkResponse.sendResponse(res, "La formule a bien été supprimée");
                } else {
                    this.internalError.sendResponse(res, "Une erreur est survenue lors de la suppression de la formule");
                }
            } else {
                this.badRequestError.sendResponse(res, "Les informations fournies ne sont pas correctes");
            }

        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }
    public async deleteFormulas(req: extendedRequest, res: Response) {
        if (req.user) {
            const { error, value } = this.formulaSchema.removeFormulasSchema.validate(req.body);
            if (!error) {
                const formulaRemove = await this.formulaRepository.deleteManyFormulas(req.body.Ids);
                if (formulaRemove) {
                    this.simpleOkResponse.sendResponse(res, "Les formules ont bien été supprimées");
                } else {
                    this.internalError.sendResponse(res, "Une erreur est survenue lors de la suppression des formules");
                }
            } else {
                this.badRequestError.sendResponse(res, "Les informations fournies ne sont pas correctes");
            }

        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }
    public async getAllFormulas(req: extendedRequest, res: Response) {
        if (req.user) {
            const allFormulas: mongodb.Cursor<IFormula> | Error = await this.formulaRepository.getAllFormulas();
            if (allFormulas instanceof Error) {
                this.internalError.sendResponse(res, "Une erreur est survenue lors de la recherche des formules")
            } else {
                this.simpleOkResponse.sendResponse(res, await allFormulas.toArray())
            }
        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }

    public async getFormula(req: extendedRequest, res: Response) {
        if (req.user) {
            const formula: IFormula | Error = await this.formulaRepository.getFormulaById(req.params.id);
            if (formula instanceof Error) {
                this.internalError.sendResponse(res, 'Une erreur est survenue lors de la recherche de la formule')
            } else if (formula != null && formula != undefined) {
                const treatments : Array<string> = new Array();
                for(let treatmentId of formula.services){
                    try{
                      const treatment = await this.treatmentRepository.getTreatment(treatmentId);
                      if(treatment instanceof Error){
                        throw treatment;

                      }else{
                         treatments.push(treatment.name);
                      }
                    }catch(err){
                        console.log(err);
                    }
                }
                formula.services = treatments;
                this.simpleOkResponse.sendResponse(res, formula)
            } else {
                this.badRequestError.sendResponse(res, 'Aucune formule trouvée')
            }
        } else {
            this.authError.sendResponse(res, "Une autentification est nécessaire")
        }
    }

    public async updateFormula(req: extendedRequest, res: Response) {
        console.log(req.body)
        if (req.user != null) {
            try {
                switch (true) {
                    case this.services.checkEmptyUndfinedNull(req.body.newTitle):
                        const updateTitle = await this.formulaRepository.updateFormula(req.params.id, "title", req.body.newTitle);
                        if(!updateTitle){
                            throw new Error("Mise à jour échouée");
                        }
                    case (req.body.newServices != null && req.body.newServices != undefined):
                        const updateServices = await this.formulaRepository.updateFormula(req.params.id, "services", req.body.newServices);
                        if(!updateServices){
                            throw new Error("Mise à jour échouée");
                        }
                    case this.services.checkEmptyUndfinedNull(req.body.newDuration):
                        const updateDuration = await this.formulaRepository.updateFormula(req.params.id, "duration", req.body.newDuration);
                        if(!updateDuration){
                            throw new Error("Mise à jour échouée");
                        }
                    case this.services.checkEmptyUndfinedNull(req.body.newPrice):
                        const updatePrice = await this.formulaRepository.updateFormula(req.params.id, "price", req.body.newPrice);
                        if(!updatePrice){
                            throw new Error("Mise à jour échouée");
                        }
                        break;

                    default: throw new Error("Aucune mise à jour à éffectuer");

                }
                this.simpleOkResponse.sendResponse(res, "Mise à jour réussie");
            } catch (err) {
                this.badRequestError.sendResponse(res,err.message);
            }

        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }

}