import { userResponseDTOHandler } from './../Services/DTOhandlers/userResponseDTOhandler';
import { extendedRequest } from './../../Interfaces/extendedRequest';
import { AuthError } from './../Services/Errors/authError';
import { CreationOkResponse } from './../Services/OkResponse/creationResponse';
import { SimpleOkResponse } from './../Services/OkResponse/simpleOkResponse';
import { InternalError } from './../Services/Errors/internalError';
import { BadRequestError } from './../Services/Errors/badRequestError';
import { userParameterDTOHandler } from './../Services/DTOhandlers/userParameterDTOhandler';
import { userParameterDTO } from './../DTO/userParameterDTO';
import { UserSchema } from '../Services/Joi Schemas/userSchema';
import { Services } from '../Services/handlers';
import { Request, Response, NextFunction } from "express";
import { DbConnection } from '../../Domain/Data/dbConnection';
import * as mongodb from 'mongodb';
import * as dotenv from 'dotenv';
import * as dotenvExpand from "dotenv-expand";
import * as jwt from 'jsonwebtoken';
import { IUserModel } from '../../Interfaces/IUser';
import { IJwtObject } from '../../Interfaces/jwtObject';
import { userRepository } from '../Data/userRepository'
import { boolean, ErrorValidationOptions } from 'joi';
import { type } from 'os';


export class UserManager {
    private userSchema = new UserSchema();
    private dotenvConfig = dotenv.config();
    private expandDotenv = dotenvExpand(this.dotenvConfig)
    private instance = DbConnection.getInstance();
    private connection = this.instance.connectMongo();
    private badRequestError = new BadRequestError();
    private authError = new AuthError()
    private internalError = new InternalError();
    private simpleOkResponse = new SimpleOkResponse();
    private creationOkResponse = new CreationOkResponse();
    private services = new Services();
    private userRepository = new userRepository();


    constructor() { }
    public async test(req: Request, res: Response) {
        this.userRepository.updateUser(req.body.id, req.body.field, req.body.newValue)
    }
    public async login(req: Request, res: Response) {
        const { error, value } = this.userSchema.userLogin.validate(req.body)
        if (!error) {
            const users: mongodb.Cursor<IUserModel> | Error = await this.userRepository.getUsers()
            if (users instanceof mongodb.Cursor) {
                const result = await this.services.searchCryptedMail(users, req.body.email);
                if (result) {
                    const verifPass = await this.services.compareCrypt(req.body.password, result.password);
                    if (verifPass == true) {
                        const token: string = jwt.sign({ id: result._id.toJSON() }, process.env.SECRET_TOKEN, { expiresIn: "1d" });
                        this.simpleOkResponse.sendResponse(res, { accessToken: token });
                    } else {
                        this.badRequestError.sendResponse(res, "Association Mail/Mot de passe inconnue");
                    }
                } else {
                    this.badRequestError.sendResponse(res, "Association Mail/Mot de passe inconnue");
                }
            } else {
                this.internalError.sendResponse(res, "Une erreur est survenue")
            }

        } else {
            this.badRequestError.sendResponse(res, "Les données fournies ne sont pas correctes");
        }
    }

    public async createUser(req: extendedRequest, res: Response) {
        if (req.user != null) {
            const { error, value } = this.userSchema.userCreate.validate(req.body);
            if (!error) {
                const users: mongodb.Cursor<IUserModel> | Error = await this.userRepository.getUsers()
                if (users instanceof mongodb.Cursor) {
                    const result = await this.services.searchCryptedMail(users, req.body.email);
                    if (!result) {
                        req.body.password = await this.services.crypt(req.body.password);
                        req.body.email = await this.services.crypt(req.body.email);
                        const userCreation = await this.userRepository.createUser(userParameterDTOHandler.toUserParameterDTO(req.body));
                        if (userCreation) {
                            this.creationOkResponse.sendResponse(res, 'Création réussie');
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

    public async CheckToken(req: extendedRequest, res: Response, next: NextFunction) {
        const headerAuth = await req.header('Authorization');
        const token = await headerAuth && headerAuth.split(' ')[1];
        if (this.services.checkEmptyUndfinedNull(token)) {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        } else {
            jwt.verify(token, process.env.SECRET_TOKEN, async (err, userId: IJwtObject) => {
                if (err) {
                    this.internalError.sendResponse(res, 'Une erreur est survenue');
                } else {
                    const foundUser: IUserModel | Error = await this.userRepository.getUserByID(userId.id)
                    if (foundUser == null || foundUser instanceof Error) {
                        this.authError.sendResponse(res, foundUser.toString());
                    } else {
                        const user = await userParameterDTOHandler.toUserParameterDTO(foundUser);
                        req.user = user;
                        next();
                    }
                }
            })
        }
    }
    public async removeUser(req: extendedRequest, res: Response) {
        if (req.user != null) {
            const { error, value } = this.userSchema.removeUserSchema.validate(req.body);
            if (!error) {
                const userRemove = this.userRepository.removeUser(req.body.id);
                if (userRemove) {
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
                const userRemove = this.userRepository.removeUsers(req.body.Ids);
                if (userRemove) {
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
        // if(req.user !=null){
        switch (true) {
            case this.services.checkEmptyUndfinedNull(req.body.newName):
                this.userRepository.updateUser(req.body.userToUpdate, "name", req.body.newName);

            case this.services.checkEmptyUndfinedNull(req.body.newFirstName):
                this.userRepository.updateUser(req.body.userToUpdate, "firstName", req.body.newFirstName);

            case this.services.checkEmptyUndfinedNull(req.body.email) && this.services.checkEmptyUndfinedNull(req.body.newEmail):
                if (req.body.email != req.body.newEmail && await this.services.compareCrypt(req.body.email, req.user.email)) {
                    const cryptedMail = await this.services.crypt(req.body.newEmail);
                    this.userRepository.updateUser(req.body.userToUpdate, "email", cryptedMail);
                }

            case this.services.checkEmptyUndfinedNull(req.body.password) && this.services.checkEmptyUndfinedNull(req.body.newPassword):
                if (req.body.password != req.body.newPassword && await this.services.compareCrypt(req.body.password, req.user.password)) {
                    const cryptedPass = await this.services.crypt(req.body.newPassword);
                    this.userRepository.updateUser(req.body.userToUpdate, "email", cryptedPass);
                }

            case this.services.checkEmptyUndfinedNull(req.body.newPhoneNumber):
                this.userRepository.updateUser(req.body.userToUpdate, "phoneNumber", req.body.newPhoneNumber);
                break;

            default: this.badRequestError.sendResponse(res, "Aucune mise à jour effectuée");
        }
        this.simpleOkResponse.sendResponse(res, "Mise à jour réussie");
        // }else{
        //     this.authError.sendResponse(res, 'Une authentification est nécessaire');
        // }
    }

}