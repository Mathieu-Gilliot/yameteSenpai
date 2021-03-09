import { TreatmentSchema } from '../Services/Joi Schemas/treatmentsSchema';
import { ITreatment } from '../../Interfaces/ITreatment';
import { TreatmentRepository } from '../Data/Repositories/treatmentsRepository';
import { extendedRequest } from '../../Interfaces/extendedRequest';
import { AuthError } from '../Services/Errors/authError';
import { CreationOkResponse } from '../Services/OkResponse/creationResponse';
import { SimpleOkResponse } from '../Services/OkResponse/simpleOkResponse';
import { InternalError } from '../Services/Errors/internalError';
import { BadRequestError } from '../Services/Errors/badRequestError';
import { Services } from '../Services/handlers';
import { Response, NextFunction } from "express";
import * as mongodb from 'mongodb';



export class TreatmentsManager {
    private badRequestError = new BadRequestError();
    private authError = new AuthError();
    private internalError = new InternalError();
    private simpleOkResponse = new SimpleOkResponse();
    private creationOkResponse = new CreationOkResponse();
    private services = new Services();
    private treatmentRepository = new TreatmentRepository();
    private treatmetntsSchema = new TreatmentSchema();

    public async createTreatment(req: extendedRequest, res: Response) {
        if (req.user) {
            const { error, value } = this.treatmetntsSchema.createTreatmentSchema.validate(req.body);
            if (!error) {
                const treatmentExist = await this.treatmentRepository.getTreatmentByName(req.body.name);
                if (treatmentExist instanceof Error) {
                    this.internalError.sendResponse(res, treatmentExist)
                } else {
                    if (treatmentExist != null) {
                        this.badRequestError.sendResponse(res, "Un soin existe déjà avec ce nom");
                    } else {
                       const createdTreatment : Boolean = await this.treatmentRepository.createTreatment(req.body);
                       if(createdTreatment){
                            this.creationOkResponse.sendResponse(res,"Soin créé avec succès");
                       }else{
                           this.badRequestError.sendResponse(res,"La création du soin a échoué");
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

    public async deleteTreatment(req: extendedRequest, res: Response) {
        if (req.user) {
            const { error, value } = this.treatmetntsSchema.removeTreatmentSchema.validate(req.params);
            if (!error) {
                const treatmentRemove = await this.treatmentRepository.removeTreatment(req.params.id);
                if (treatmentRemove) {
                    this.simpleOkResponse.sendResponse(res, "Le soin a bien été supprimée");
                } else {
                    this.internalError.sendResponse(res, "Une erreur est survenue lors de la suppression de le soin");
                }
            } else {
                this.badRequestError.sendResponse(res, "Les informations fournies ne sont pas correctes");
            }

        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }
    public async deleteTreatments(req: extendedRequest, res: Response) {
        if (req.user) {
            const { error, value } = this.treatmetntsSchema.removeTreatmentsSchema.validate(req.body);
            if (!error) {
                const treatmentRemove = await this.treatmentRepository.removeMultipleTreatments(req.body.Ids);
                if (treatmentRemove) {
                    this.simpleOkResponse.sendResponse(res, "Les soins ont bien été supprimés");
                } else {
                    this.internalError.sendResponse(res, "Une erreur est survenue lors de la suppression des soins");
                }
            } else {
                this.badRequestError.sendResponse(res, "Les informations fournies ne sont pas correctes");
            }

        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }
    public async getAllTreatments(req: extendedRequest, res: Response) {
        if (req.user) {
            const allTreatments: mongodb.Cursor<ITreatment> | Error = await this.treatmentRepository.getAllTreatments();
            if (allTreatments instanceof Error) {
                this.internalError.sendResponse(res, "Une erreur est survenue lors de la recherche des soins")
            } else {
                this.simpleOkResponse.sendResponse(res, await allTreatments.toArray())
            }
        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }

    public async getTreatment(req: extendedRequest, res: Response) {
        if (req.user) {
            const treatment: ITreatment | Error = await this.treatmentRepository.getTreatment(req.params.id);
            if (treatment instanceof Error) {
                this.internalError.sendResponse(res, 'Une erreur est survenue lors de la recherche du soin')
            } else if (treatment != null && treatment != undefined) {
                this.simpleOkResponse.sendResponse(res, treatment)
            } else {
                this.badRequestError.sendResponse(res, 'Aucun soin trouvé')
            }
        } else {
            this.authError.sendResponse(res, "Une autentification est nécessaire")
        }
    }

    public async updateTreatment(req: extendedRequest, res: Response) {
        if (req.user != null) {
            switch (true) {
                case this.services.checkEmptyUndfinedNull(req.body.newName):
                    this.treatmentRepository.updateTreatment(req.params.id, "name", req.body.newName);
                    break;
                default: this.badRequestError.sendResponse(res, "Aucune mise à jour effectuée");
            }
            this.simpleOkResponse.sendResponse(res, "Mise à jour réussie");
        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }

}