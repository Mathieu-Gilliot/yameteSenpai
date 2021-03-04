import { extendedRequest } from '../Interfaces/extendedRequest';
import { Request, Response,NextFunction } from "express";
import {EmployeesManager} from '../Domain/Managers/employeesManager'

export class EmployeesController {
   employeesManager = new EmployeesManager()


};
