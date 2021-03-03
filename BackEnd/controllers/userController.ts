import { extendedRequest } from './../Interfaces/extendedRequest';
import { Request, Response,NextFunction } from "express";
import {UserManager} from '../Domain/Managers/userManager'

export class UserController {

    public login(req:extendedRequest, res: Response){
        const userManager : UserManager = new UserManager();
        userManager.login(req,res);
    }
    public createUser(req:extendedRequest, res:Response){
        const userManager : UserManager = new UserManager();
        userManager.createUser(req,res);
    }
    public checkuser(req:extendedRequest,res:Response,next:NextFunction){
        const userManager : UserManager = new UserManager();
        userManager.CheckToken(req,res,next);
    }
};

