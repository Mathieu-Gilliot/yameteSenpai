import * as joi from 'joi';


export class TreatmentSchema {

    public createTreatmentSchema: joi.ObjectSchema = joi.object({
        name:joi.string().required()
    })
    public removeTreatmentSchema : joi.ObjectSchema = joi.object({
        id: joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
     })
     public removeTreatmentsSchema : joi.ObjectSchema = joi.object({
       Ids: joi.array().items(joi.string().regex(/^[0-9a-fA-F]{24}$/)).required()
    })

}