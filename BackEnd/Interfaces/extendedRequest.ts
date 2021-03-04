
import { Request } from 'express';
import { userParameterDTO } from '../Domain/DTO/userParameterDTO';



export interface extendedRequest extends Request{
    user:  userParameterDTO
}