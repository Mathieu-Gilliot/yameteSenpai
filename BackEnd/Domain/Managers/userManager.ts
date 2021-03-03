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



    constructor() { }

    public async login(req: Request, res: Response) {
        const { error, value } = this.userSchema.userLogin.validate(req.body)
        if (!error) {
            this.connection.then(async (mc: mongodb.MongoClient) => {
                const userCollection: mongodb.Collection<IUserModel> = await mc.db(`${process.env.DB_NAME}`).collection('Users');
                const querry: mongodb.Cursor<IUserModel> = await userCollection.find();
                const result = await this.services.searchCryptedMail(querry, req.body.email);
                if (result) {
                    const verifPass = await this.services.compareCrypt(req.body.password, result.password);
                    if (verifPass) {
                        const token: string =  jwt.sign({id: result._id.toJSON()}, process.env.SECRET_TOKEN,{expiresIn:"1d"});
                        this.simpleOkResponse.sendResponse(res, { accessToken: token });
                    } else {
                        this.badRequestError.sendResponse(res, "Mauvais mot de passe");
                    }
                } else {
                    this.badRequestError.sendResponse(res, "Utilisateur Inconnu");
                }
            })
        } else {
            this.badRequestError.sendResponse(res, 'Les données fournies ne sont pas correctes');
        }
    }

    public async createUser(req: extendedRequest, res: Response) {
        if (req.user != null) {
            const { error, value } = this.userSchema.userCreate.validate(req.body);
            if (!error) {
                this.connection.then(async (mc: mongodb.MongoClient) => {
                    const userCollection: mongodb.Collection<userParameterDTO> = await mc.db(`${process.env.DB_NAME}`).collection('Users');
                    const querry: mongodb.Cursor<userParameterDTO> = await userCollection.find();
                    const result = await this.services.searchCryptedMail(querry, req.body.email);
                    if (!result) {
                        req.body.password = await this.services.crypt(req.body.password);
                        req.body.email = await this.services.crypt(req.body.email);
                        try {
                            await userCollection.insertOne(
                                userParameterDTOHandler.toUserParameterDTO(req.body)
                            )
                            this.creationOkResponse.sendResponse(res, 'Création réussie')
                        } catch (err) {
                            this.badRequestError.sendResponse(res, "Une erreur de sauvregarde est survenue" + err);
                        }
                    } else {
                        this.badRequestError.sendResponse(res, "Un utilisateur est déjà enregistré avec cet email");
                    }
                })
            } else {
                this.badRequestError.sendResponse(res, "Les données fournies sont incorrectes");
            }
        }else{
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        }

    }

    public async CheckToken(req: extendedRequest, res: Response, next: NextFunction) {
        const headerAuth = await req.header('Authorization');
        const token = await headerAuth && headerAuth.split(' ')[1]
        if (token == undefined || token == null || !this.services.checkEmpty(token)) {
            this.authError.sendResponse(res, 'Une authentification est nécessaire');
        } else {
            jwt.verify(token, process.env.SECRET_TOKEN, async (err, userId) => {
                if (err) {
                    this.internalError.sendResponse(res, 'Une erreur est survenue')
                } else {
                    this.connection.then(async (mc: mongodb.MongoClient) => {
                        console.log(userId.id)
                        const userCollection: mongodb.Collection<IUserModel> = await mc.db(`${process.env.DB_NAME}`).collection('Users');
                        const result = await userCollection.findOne({ _id: new mongodb.ObjectID(userId.toString()) });
                        if (result != null) {
                            const user = await userResponseDTOHandler.toUserParameterDTO(result);
                            req.user = user;
                            next();
                        }
                    })
                }
            })
        }
    }

}