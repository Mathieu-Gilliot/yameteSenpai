import * as joi from 'joi';
const joiExtended = joi.extend(require('joi-phone-number'));



export class UserSchema {

  public userLogin : joi.ObjectSchema  = joi.object({
        email: joi.string().trim().email().required(),
        password : joi.string().trim().min(8).pattern( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/).required()
  });

  public userCreate : joi.ObjectSchema = joi.object({
      name: joi.string().required(),
      firstName: joi.string().required(),
      email: joi.string().trim().email().required(),
      password : joi.string().min(8).pattern( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
      rdv : joi.array().items(joi.string().regex(/^[0-9a-fA-F]{24}$/)),
      comments:joi.array().items(joi.string().regex(/^[0-9a-fA-F]{24}$/)),
      phoneNumber: joiExtended.string().phoneNumber({defaultCountry:'FR',format: 'international'})
  });
  public removeUserSchema : joi.ObjectSchema = joi.object({
     id: joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
  })
  public removeUsersSchema : joi.ObjectSchema = joi.object({
    Ids: joi.array().items(joi.string().regex(/^[0-9a-fA-F]{24}$/)).required()
 })

}