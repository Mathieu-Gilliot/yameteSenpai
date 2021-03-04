import { extendedRequest } from '../Interfaces/extendedRequest';
import { Request, Response,NextFunction } from "express";
import {RightsManager} from '../Domain/Managers/rightsManager'

export class RightsController {
   rightsManager = new RightsManager()


};

