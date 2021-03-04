import { extendedRequest } from '../Interfaces/extendedRequest';
import { Request, Response,NextFunction } from "express";
import {ServicesManager} from '../Domain/Managers/servicesManager'

export class ServicesController {
   private servicesManager = new ServicesManager()

   public checkToken=(req:extendedRequest, res:Response,next:NextFunction)=>{
       this.servicesManager.checkToken(req,res,next)
   }

};