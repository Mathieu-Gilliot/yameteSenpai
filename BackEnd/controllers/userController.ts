import { extendedRequest } from '../Interfaces/extendedRequest';
import { Request, Response,NextFunction } from "express";
import {UserManager} from '../Domain/Managers/userManager'

export class UserController {
    private userManager = new UserManager()


    public createUser=(req:extendedRequest, res:Response)=>{

        this.userManager.createUser(req,res);
    }

    public test = (req:extendedRequest,res:Response)=>{

        this.userManager.updateUser(req,res)
    }
    public updateUser = (req:extendedRequest,res:Response)=>{

        this.userManager.updateUser(req,res)
    }
    public deleteUser = (req:extendedRequest,res:Response)=>{

        this.userManager.removeUser(req,res)
    }
    public deleteMultipleUser = (req:extendedRequest,res:Response)=>{

        this.userManager.removeUsers(req,res)
    }
    public getUserById = (req:extendedRequest,res:Response)=>{

        this.userManager.getUserByID(req,res)
    }
};

