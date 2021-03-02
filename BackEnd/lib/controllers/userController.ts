import { Request, Response } from "express";
import {UserManager} from '../../Domain/Managers/userManager'

export class UserController {

    public login(req: Request, res: Response){
        const userManager : UserManager = new UserManager();
        userManager.login(req,res);
    }
    public createUser(req:Request, res:Response){
        const userManager : UserManager = new UserManager();
        userManager.createUser(req,res);
    }
};

