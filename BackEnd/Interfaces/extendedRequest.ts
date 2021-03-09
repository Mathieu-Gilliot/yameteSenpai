import { IUserDTO } from './IUser';

import { Request } from 'express';
import { userResponseDTO } from '../Domain/DTO/userResponseDTO';



export interface extendedRequest extends Request{
    user:  IUserDTO;
}