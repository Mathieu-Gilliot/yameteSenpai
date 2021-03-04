import * as joi from 'joi';
const joiExtended = joi.extend(require('joi-phone-number'));


export class AuthSchema {

    public userLogin: joi.ObjectSchema = joi.object({
        email: joi.string().trim().email().required(),
        password: joi.string().trim().min(8).pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).required()
    });
    public createAuth: joi.ObjectSchema = joi.object({
        email: joi.string().trim().email().required(),
        password: joi.string().trim().min(8).pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).required(),
        userId : joi.string().regex(/^[0-9a-fA-F]{24}$/)
    })
}