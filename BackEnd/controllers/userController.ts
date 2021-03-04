import { extendedRequest } from './../Interfaces/extendedRequest';
import { Request, Response,NextFunction } from "express";
import {UserManager} from '../Domain/Managers/userManager'

export class UserController {
    userManager = new UserManager()

    public login = (req:extendedRequest, res: Response)=>{
        this.userManager.login(req,res);
    }
    public createUser=(req:extendedRequest, res:Response)=>{

        this.userManager.createUser(req,res);
    }
    public checkuser=(req:extendedRequest,res:Response,next:NextFunction)=>{

        this.userManager.CheckToken(req,res,next);
    }
    public test = (req:extendedRequest,res:Response)=>{

        this.userManager.updateUser(req,res)
    }
};

