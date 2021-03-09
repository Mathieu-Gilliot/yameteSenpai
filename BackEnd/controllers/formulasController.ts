
import { extendedRequest } from '../Interfaces/extendedRequest';
import { Request, Response,NextFunction } from "express";
import {FormulasManager} from '../Domain/Managers/formulasManager'


export class FormulasController{

    private formulaManager = new FormulasManager();

    public createFormula= (res:extendedRequest,req:Response)=>{
        this.formulaManager.createFormula(res,req);
    }

    public getFormula= (res:extendedRequest,req:Response)=>{
        this.formulaManager.getFormula(res,req);
    }

    public getAllFormulas= (res:extendedRequest,req:Response)=>{
        this.formulaManager.getAllFormulas(res,req);
    }

    public deleteFormula = (res:extendedRequest,req:Response)=>{
        this.formulaManager.deleteFormula(res,req);
    }

    public deleteMultipleFormulas = (res:extendedRequest,req:Response)=>{
        this.formulaManager.deleteFormulas(res,req);
    }

    public updateFormula = (res:extendedRequest,req:Response)=>{
        this.formulaManager.updateFormula(res,req);
    }
}