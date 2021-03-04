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
import { userRepository } from '../Data/Repositories/userRepository';



export class ServicesManager {
    private userRepository = new userRepository();
    private services = new Services();
    private authError = new AuthError();
    private internalError = new InternalError();
    private authRepository = new AuthRepository();

    public async checkToken(req: extendedRequest, res: Response, next: NextFunction) {
        const headerAuth = await req.header('Authorization');
        const token = await headerAuth && headerAuth.split(' ')[1];
        if (!this.services.checkEmptyUndfinedNull(token)) {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        } else {
            jwt.verify(token, process.env.SECRET_TOKEN, async (err, userId: IJwtObject) => {
                if (err) {
                    this.internalError.sendResponse(res, 'Une erreur est survenue');
                } else {
                    const foundAuth: IAuth | Error = await this.authRepository.getAuth(userId.id)
                    if (foundAuth == null || foundAuth instanceof Error) {
                        this.authError.sendResponse(res, "Aucun utilisateur trouvé");
                    } else {
                        const user = await this.userRepository.getUserByID(foundAuth.userId);
                        if (user == null || user instanceof Error) {
                            this.authError.sendResponse(res, "Aucun utilisateur trouvé");
                        } else {
                            req.user = user
                            next();
                        }

                    }
                }
            })
        }
    }


}