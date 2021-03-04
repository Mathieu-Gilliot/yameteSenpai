import { extendedRequest } from '../Interfaces/extendedRequest';
import { Request, Response,NextFunction } from "express";
import {AuthManager} from '../Domain/Managers/authManager'

export class AuthController {
   private authManager = new AuthManager()

   public login = (req:extendedRequest,res:Response)=>{
      this.authManager.login(req,res);
   }
   public updateAuth = (req:extendedRequest,res:Response)=>{
      this.authManager.updateAuth(req,res);
   }
};
