import * as joi from 'joi';
import joiObjectId from 'joi-objectid';
const joiExtended = joi.extend(require('joi-phone-number'));


export class UserSchema {
  public testObjectid : joi.ObjectSchema = joi.object({
    test : joiObjectId()
  })
  public userLogin : joi.ObjectSchema  = joi.object({
        email: joi.string().trim().email().required(),
        password : joi.string().min(8).pattern( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  });

  public userCreate : joi.ObjectSchema = joi.object({
      name: joi.string().required(),
      firstName: joi.string().required(),
      email: joi.string().trim().email().required(),
      password : joi.string().min(8).pattern( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
      rdv : joi.array().items(joiObjectId()),
      comments:joi.array().items(joiObjectId()),
      phoneNumber: joiExtended.string().phoneNumber({defaultCountry:'FR',format: 'international'})
  })

}