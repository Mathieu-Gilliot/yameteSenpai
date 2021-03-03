import {  Response } from "express";
import { httpResponse } from "../httpResponse";

export class InternalError extends httpResponse {

   constructor(){
       super(500)
   }
    
}