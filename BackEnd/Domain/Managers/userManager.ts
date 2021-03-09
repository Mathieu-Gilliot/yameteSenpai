import { IAuth } from './../../Interfaces/IAuth';
import { AuthRepository } from './../Data/Repositories/authRepository';
import { userResponseDTOHandler } from './../Services/DTOhandlers/userResponseDTOhandler';
import { extendedRequest } from './../../Interfaces/extendedRequest';
import { AuthError } from './../Services/Errors/authError';
import { CreationOkResponse } from './../Services/OkResponse/creationResponse';
import { SimpleOkResponse } from './../Services/OkResponse/simpleOkResponse';
import { InternalError } from './../Services/Errors/internalError';
import { BadRequestError } from './../Services/Errors/badRequestError';
import { userParameterDTO } from './../DTO/userParameterDTO';
import { UserSchema } from '../Services/Joi Schemas/userSchema';
import { Services } from '../Services/handlers';
import { Response, NextFunction } from "express";
import * as mongodb from 'mongodb';
import * as jwt from 'jsonwebtoken';
import { IUserDTO } from '../../Interfaces/IUser';
import { IJwtObject } from '../../Interfaces/IjwtObject';
import { userRepository } from '../Data/Repositories/userRepository'



export class UserManager {
    private userSchema = new UserSchema();
    private badRequestError = new BadRequestError();
    private authError = new AuthError()
    private internalError = new InternalError();
    private simpleOkResponse = new SimpleOkResponse();
    private creationOkResponse = new CreationOkResponse();
    private services = new Services();
    private userRepository = new userRepository();
    private authRepository = new AuthRepository();

    constructor() { }

    public async createUser(req: extendedRequest, res: Response) {
        if (req.user != null) {
        const { error, value } = this.userSchema.userCreate.validate(req.body);
        if (!error) {
            const auths: mongodb.Cursor<IAuth> | Error = await this.authRepository.getAllAuth()
            if (auths instanceof mongodb.Cursor) {
                const result = await this.services.searchCryptedMail(auths, req.body.email);
                if (!result) {
                    req.body.password = await this.services.crypt(req.body.password);
                    req.body.email = await this.services.crypt(req.body.email);
                    const userCreation = await this.userRepository.createUser(userResponseDTOHandler.toUserResponseDTO(req.body));
                    if (userCreation) {
                        const authCreation = await this.authRepository.createAuth({ email: req.body.email, password: req.body.password, userId: userCreation.toString() })
                        if (authCreation) {
                            this.creationOkResponse.sendResponse(res, 'Création réussie');
                        } else {
                            this.badRequestError.sendResponse(res, "Une erreur de sauvegarde est survenue");
                        }
                    } else {
                        this.badRequestError.sendResponse(res, "Une erreur de sauvegarde est survenue");
                    }
                } else {
                    this.badRequestError.sendResponse(res, "Un utilisateur est déjà enregistré avec cet email");
                }
            } else {
                this.internalError.sendResponse(res, "Une erreur est survenue");
            }
        } else {
            this.badRequestError.sendResponse(res, "Les données fournies sont incorrectes");
        }
        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }

    }

    public async removeUser(req: extendedRequest, res: Response) {
        if (req.user != null) {
            const { error, value } = this.userSchema.removeUserSchema.validate(req.body);
            if (!error) {
                const userRemove = this.userRepository.removeUser(req.params.id);
                const authRemove = this.authRepository.removeAuth(req.params.id);
                if (userRemove && authRemove) {
                    this.simpleOkResponse.sendResponse(res, "Utilisateur supprimé");
                } else {
                    this.internalError.sendResponse(res, "Une erreur est survenue lors de la suppression de l'utilisateur");
                }
            } else {
                this.badRequestError.sendResponse(res, "Les données fournies sont incorrectes");
            }
        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }
    public async removeUsers(req: extendedRequest, res: Response) {
        if (req.user != null) {
            const { error, value } = this.userSchema.removeUsersSchema.validate(req.body);
            if (!error) {
                const usersRemove = this.userRepository.removeUsers(req.body.Ids);
                const authsRemove = this.authRepository.removeMultipleAuth(req.body.Ids)
                if (usersRemove && authsRemove) {
                    this.simpleOkResponse.sendResponse(res, "Utilisateurs supprimés");
                } else {
                    this.internalError.sendResponse(res, "Une erreur est survenue lors de la suppression des utilisateurs");
                }
            } else {
                this.badRequestError.sendResponse(res, "Les données fournies sont incorrectes");
            }
        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }
    public async updateUser(req: extendedRequest, res: Response) {
        if (req.user != null) {
            switch (true) {
                case this.services.checkEmptyUndfinedNull(req.body.newName):
                    this.userRepository.updateUser(req.params.id, "name", req.body.newName);

                case this.services.checkEmptyUndfinedNull(req.body.newFirstName):
                    this.userRepository.updateUser(req.params.id, "firstName", req.body.newFirstName);

                case this.services.checkEmptyUndfinedNull(req.body.newPhoneNumber):
                    this.userRepository.updateUser(req.params.id, "phoneNumber", req.body.newPhoneNumber);
                    break;

                default: this.badRequestError.sendResponse(res, "Aucune mise à jour effectuée");
            }
            this.simpleOkResponse.sendResponse(res, "Mise à jour réussie");
        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }

    public async getUserByID(req: extendedRequest, res: Response) {
        if (req.user != null) {
            const user: IUserDTO | Error = await this.userRepository.getUserByID(req.params.id)
            if (user instanceof Error) {
                this.badRequestError.sendResponse(res, "Une erreur est survenue lors de la recherche de l'utilisateur")
            } else if (user != null && user != undefined) {
                this.simpleOkResponse.sendResponse(res, await userResponseDTOHandler.toUserResponseDTO(user))
            } else {
                this.badRequestError.sendResponse(res, "Aucun utilisateur trouvé")
            }
        } else {
            this.authError.sendResponse(res, 'Une authentification est necessaire')
        }
    }

}