import * as joi from 'joi';
import joiObjectId from 'joi-objectid';


export class EmployeesSchema {

    public createEmployee : joi.ObjectSchema = joi.object({
        name: joi.string().required(),
        firstName: joi.string().required(),
        rdv: joi.array().items(joiObjectId().required()),
        isManager: joi.boolean().required(),
        vacation: joi.array().items(joi.object({start:joi.date(),end:joi.date()})).required(),
        specialty:joi.string().valid("Massage","Soins").required(),
        mobility:joi.string().valid("Salon","Domicile").required(),
    })

    public updateVacation : joi.ObjectSchema = joi.object({
        vacation: joi.array().items(joi.object({start:joi.date(),end:joi.date()})).required()
    })
}