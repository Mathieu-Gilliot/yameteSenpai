import * as joi from 'joi';


export class FormulaSchema {

    public createFormula: joi.ObjectSchema = joi.object({
        title: joi.string().required(),
        services : joi.array().items(joi.string().regex(/^[0-9a-fA-F]{24}$/)).required(),
        duration: joi.string().required(),
        price: joi.number().required()
    })
    public removeFormulaSchema : joi.ObjectSchema = joi.object({
        id: joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
     })
     public removeFormulasSchema : joi.ObjectSchema = joi.object({
       Ids: joi.array().items(joi.string().regex(/^[0-9a-fA-F]{24}$/)).required()
    })

}