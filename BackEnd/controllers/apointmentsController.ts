import { extendedRequest } from '../Interfaces/extendedRequest';
import { Request, Response,NextFunction } from "express";
import {ApointmentsManager} from '../Domain/Managers/apointmentsManager'

export class ApointmentsController {
   apointmentsManager = new ApointmentsManager()


};
