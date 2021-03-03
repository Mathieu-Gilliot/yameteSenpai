import * as joi from 'joi';
import joiObjectId from 'joi-objectid';


export class rdvsSchema{


    public createRdv:joi.ObjectSchema = joi.object({
        date: joi.date().required(),
        customer: joiObjectId(),
        employee: joiObjectId()
    })
}