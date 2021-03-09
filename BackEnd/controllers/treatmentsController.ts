
import { extendedRequest } from '../Interfaces/extendedRequest';
import { Request, Response,NextFunction } from "express";
import {TreatmentsManager} from '../Domain/Managers/treatmentsManager'


export class TreatmentsController{

    private treatmentManager = new TreatmentsManager();

    public createTreatment= (res:extendedRequest,req:Response)=>{
        this.treatmentManager.createTreatment(res,req);
    }

    public getTreatment= (res:extendedRequest,req:Response)=>{
        this.treatmentManager.getTreatment(res,req);
    }

    public getAllTreatments= (res:extendedRequest,req:Response)=>{
        this.treatmentManager.getAllTreatments(res,req);
    }

    public deleteTreatment = (res:extendedRequest,req:Response)=>{
        this.treatmentManager.deleteTreatment(res,req);
    }

    public deleteMultpipleTreatments = (res:extendedRequest,req:Response)=>{
        this.treatmentManager.deleteTreatments(res,req);
    }

    public updateTreatment = (res:extendedRequest,req:Response)=>{
        this.treatmentManager.updateTreatment(res,req);
    }
}