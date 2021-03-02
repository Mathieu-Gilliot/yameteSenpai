import { UserSchema } from '../Services/userSchema';
import { Services } from '../Services/handlers';
import { Request, Response } from "express";
import { DbConnection } from '../../Domain/Data/dbConnection';
import * as mongodb from 'mongodb';
import * as dotenv from 'dotenv';
import * as dotenvExpand from "dotenv-expand";
import * as jwt from 'jsonwebtoken';
import { IUserModel } from '../../Interfaces/IUser'

export class UserManager {
    private userSchema = new UserSchema();
    private dotenvConfig = dotenv.config();
    private expandDotenv = dotenvExpand(this.dotenvConfig)
    private instance = DbConnection.getInstance();
    private connection = this.instance.connectMongo();

    private services = new Services()
    constructor() { }

    public async login(req: Request, res: Response) {
        const { error, value } = this.userSchema.userLogin.validate(req.body)
        if (!error) {
            this.connection.then(async (db: mongodb.MongoClient) => {
                const userCollection: mongodb.Collection<IUserModel> = await db.db(`${process.env.DB_NAME}`).collection('Users');
                const querry: mongodb.Cursor<IUserModel> = await userCollection.find();
                const result = await this.services.searchCryptedMail(querry, req.body.email);
                if (result) {
                    const verifPass = await this.services.compareCrypt(req.body.password, result.password);
                    if (verifPass) {
                        const token: string = jwt.sign(result._id.toJSON(), process.env.SECRET_TOKEN);
                        res.status(200).send({ accessToken: token });
                    } else {
                        res.status(400).send({ message: "Le mot de passe n'est pas le bon!" });
                    }
                } else {
                    res.status(400).send({ message: "Utilisateur inconnu!" });
                }
            })
        } else {
            res.status(400).send({ message: error.message });
        }
    }

    public async createUser(req: Request, res: Response) {
        const { error, value } = this.userSchema.userCreate.validate(req.body);
        if (!error) {
            this.connection.then(async (db: mongodb.MongoClient) => {
                const userCollection: mongodb.Collection<IUserModel> = await db.db(`${process.env.DB_NAME}`).collection('Users');
                const querry: mongodb.Cursor<IUserModel> = await userCollection.find();
                const result = await this.services.searchCryptedMail(querry, req.body.email);
                if (!result) {
                    const cryptedPass: string = await this.services.crypt(req.body.password);
                    const cryptedMail: string = await this.services.crypt(req.body.email);
                    try {
                        await userCollection.insertOne({
                            name: req.body.name,
                            firstName: req.body.firstName,
                            email: cryptedMail,
                            password: cryptedPass,
                            phoneNumber: req.body.phoneNumber,
                            rdv: [],
                            comments: []
                        })
                        res.status(201).send({ message: "L'utilisateur a été correctement créé" })
                    } catch (err) {
                        res.status(400).send({ message: "Une erreur de sauvregarde est survenue" + err })
                    }

                } else {
                    res.status(400).send({ message: "Un utilisateur est déjà enregistré avec cet email" });
                }
            })
        } else {
            res.status(400).send({ message: error.message });
        }
    }


}