import { userResponseDTO } from './../Domain/DTO/userResponseDTO';
import { Request } from 'express';



export interface extendedRequest extends Request{
    user:string|userResponseDTO
}