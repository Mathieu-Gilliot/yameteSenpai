"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
const userSchema_1 = require("../Services/userSchema");
const handlers_1 = require("../Services/handlers");
const dbConnection_1 = require("../../Domain/Data/dbConnection");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const jwt = require("jsonwebtoken");
class UserManager {
    constructor() {
        this.userSchema = new userSchema_1.UserSchema();
        this.dotenvConfig = dotenv.config();
        this.expandDotenv = dotenvExpand(this.dotenvConfig);
        this.instance = dbConnection_1.DbConnection.getInstance();
        this.connection = this.instance.connectMongo();
        this.services = new handlers_1.Services();
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error, value } = this.userSchema.userLogin.validate(req.body);
            if (!error) {
                this.connection.then((db) => __awaiter(this, void 0, void 0, function* () {
                    const userCollection = yield db.db(`${process.env.DB_NAME}`).collection('Users');
                    const querry = yield userCollection.find();
                    const result = yield this.services.searchCryptedMail(querry, req.body.email);
                    if (result) {
                        const verifPass = yield this.services.compareCrypt(req.body.password, result.password);
                        if (verifPass == req.body.password) {
                            const token = jwt.sign(result._id.toJSON(), process.env.SECRET_TOKEN);
                            res.status(200).send({ accessToken: token });
                        }
                        else {
                            res.status(400).send({ message: "Le mot de passe n'est pas le bon!" });
                        }
                    }
                    else {
                        res.status(400).send({ message: "Utilisateur inconnu!" });
                    }
                }));
            }
            else {
                res.status(400).send({ message: error.message });
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error, value } = this.userSchema.userCreate.validate(req.body);
        });
    }
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error, value } = this.userSchema.testObjectid.validate(req.body);
            console.log(error);
        });
    }
}
exports.UserManager = UserManager;
//# sourceMappingURL=userManager.js.map