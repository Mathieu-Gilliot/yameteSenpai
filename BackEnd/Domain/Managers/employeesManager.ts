import { EmployeesRepository } from './../Data/Repositories/employeesRepository';
import { IEmployee } from './../../Interfaces/IEmployee';
import { EmployeesSchema } from './../Services/Joi Schemas/employeesSchema';
import { userResponseDTOHandler } from './../Services/DTOhandlers/userResponseDTOhandler';
import { extendedRequest } from './../../Interfaces/extendedRequest';
import { AuthError } from './../Services/Errors/authError';
import { CreationOkResponse } from './../Services/OkResponse/creationResponse';
import { SimpleOkResponse } from './../Services/OkResponse/simpleOkResponse';
import { InternalError } from './../Services/Errors/internalError';
import { BadRequestError } from './../Services/Errors/badRequestError';
import { Services } from '../Services/handlers';
import { Response, NextFunction } from "express";
import * as mongodb from 'mongodb';
import * as jwt from 'jsonwebtoken';
import { IJwtObject } from '../../Interfaces/IjwtObject';

export class EmployeesManager {
    private employeesSchema = new EmployeesSchema();
    private badRequestError = new BadRequestError();
    private authError = new AuthError();
    private internalError = new InternalError();
    private simpleOkResponse = new SimpleOkResponse();
    private creationOkResponse = new CreationOkResponse();
    private services = new Services();
    private employeesRepository = new EmployeesRepository();

    public async createEmployee(req: extendedRequest, res: Response) {
        if (req.user != null) {
            const { error, value } = this.employeesSchema.createEmployee.validate(req.body)
            if (!error) {
                const employees : IEmployee|Error= await this.employeesRepository.getEmployeeByNameAndFirstName(req.body.name.trim().toLowerCase(),req.body.firstName.trim().toLowerCase())
            } else {
                this.badRequestError.sendResponse(res, "Les informations fournies sont incorrectes");
            }
        } else {
            this.authError.sendResponse(res, "Une authentification est nécessaire")
        }

    }
}