"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const joi = require("@hapi/joi");
joi.objectId = require('joi-objectid')(joi);
class UserSchema {
    constructor() {
        this.testObjectid = joi.object({
            test: joi.objectId()
        });
        this.userLogin = joi.object({
            email: joi.string().trim().email().required(),
            password: joi.string().min(8).pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
        });
        this.userCreate = joi.object({
            name: joi.string().required(),
            firstName: joi.string().required(),
            email: joi.string().trim().email().required(),
            password: joi.string().min(8).pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w])$/),
            rdv: joi.array().items(joi.objectId()),
            comments: joi.array().items(joi.objectId())
        });
    }
}
exports.UserSchema = UserSchema;
//# sourceMappingURL=userSchema.js.map