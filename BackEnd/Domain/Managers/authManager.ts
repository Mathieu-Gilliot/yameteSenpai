import { AuthRepository } from './../Data/Repositories/authRepository';
import { AuthSchema } from './../Services/Joi Schemas/authSchema';

import { extendedRequest } from './../../Interfaces/extendedRequest';
import { AuthError } from './../Services/Errors/authError';
import { CreationOkResponse } from './../Services/OkResponse/creationResponse';
import { SimpleOkResponse } from './../Services/OkResponse/simpleOkResponse';
import { InternalError } from './../Services/Errors/internalError';
import { BadRequestError } from './../Services/Errors/badRequestError';
import { Services } from '../Services/handlers';
import { Response, NextFunction } from "express";
import * as mongodb from 'mongodb';
import * as jwt from 'jsonwebtoken';
import { IJwtObject } from '../../Interfaces/IjwtObject';
import { IAuth } from '../../Interfaces/IAuth';

export class AuthManager {
    private badRequestError = new BadRequestError();
    private authError = new AuthError();
    private internalError = new InternalError();
    private simpleOkResponse = new SimpleOkResponse();
    private creationOkResponse = new CreationOkResponse();
    private services = new Services();
    private authSchema = new AuthSchema();
    private authRepository = new AuthRepository();

    public async login(req: extendedRequest, res: Response) {
        const { error, value } = this.authSchema.userLogin.validate(req.body);
        if (!error) {
            const auths: mongodb.Cursor<IAuth> | Error = await this.authRepository.getAllAuth();
            if (auths instanceof mongodb.Cursor) {
                const result: IAuth | Error = await this.services.searchCryptedMail(auths, req.body.email);
                if (result instanceof Error) {
                    this.badRequestError.sendResponse(res, "Association Mail/Mot de passe inconnue");
                } else {
                    const verifPass = await this.services.compareCrypt(req.body.password, result.password);
                    if (verifPass == true) {
                        const token: string = jwt.sign({ id: result._id }, process.env.SECRET_TOKEN, { expiresIn: "1d" });
                        this.simpleOkResponse.sendResponse(res, { accessToken: token });
                    } else {
                        this.badRequestError.sendResponse(res, "Association Mail/Mot de passe inconnue");
                    }
                }
            } else {
                this.internalError.sendResponse(res, "Une erreur est survenue");
            }

        } else {
            this.badRequestError.sendResponse(res, "Les données fournies ne sont pas correctes");
        }
    }
    
    public async updateAuth(req: extendedRequest, res: Response) {
        if (req.user != null) {
            const auth = await this.authRepository.getAuth(req.user._id);
            if (auth instanceof Error) {
                this.badRequestError.sendResponse(res,"Utilisateur non reconnu")
            } else {
                switch (true) {
                    case this.services.checkEmptyUndfinedNull(req.body.email) && this.services.checkEmptyUndfinedNull(req.body.newEmail):
                        if (req.body.email != req.body.newEmail && await this.services.compareCrypt(req.body.email, auth.email)) {
                            const cryptedMail = await this.services.crypt(req.body.newEmail);
                            this.authRepository.updateAuth(req.params.id, "email", cryptedMail);
                        }
                    case this.services.checkEmptyUndfinedNull(req.body.password) && this.services.checkEmptyUndfinedNull(req.body.newPassword):
                        if (req.body.password != req.body.newPassword && await this.services.compareCrypt(req.body.password, auth.password)) {
                            const cryptedPass = await this.services.crypt(req.body.newPassword);
                            this.authRepository.updateAuth(req.params.id, "password", cryptedPass);
                        }
                    default: this.badRequestError.sendResponse(res, "Aucune mise à jour effectuée");

                }
                this.simpleOkResponse.sendResponse(res, "Mise à jour réussie");
            }

        } else {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }
    }
}