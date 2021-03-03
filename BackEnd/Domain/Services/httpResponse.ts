

import {  Response } from "express";



export class httpResponse{
    
    status : number;
    constructor(status:number){
        this.status =status;
    }
      sendResponse(res:Response,message:String|Object){   
        return res.status(this.status).send({message:message})
    }
   
};
