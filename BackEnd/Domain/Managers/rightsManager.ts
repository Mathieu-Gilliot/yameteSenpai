import { userResponseDTOHandler } from './../Services/DTOhandlers/userResponseDTOhandler';
import { extendedRequest } from './../../Interfaces/extendedRequest';
import { AuthError } from './../Services/Errors/authError';
import { CreationOkResponse } from './../Services/OkResponse/creationResponse';
import { SimpleOkResponse } from './../Services/OkResponse/simpleOkResponse';
import { InternalError } from './../Services/Errors/internalError';
import { BadRequestError } from './../Services/Errors/badRequestError';
import { Services } from '../Services/handlers';
import {  Response, NextFunction } from "express";
import * as mongodb from 'mongodb';
import * as jwt from 'jsonwebtoken';
import { IJwtObject } from '../../Interfaces/IjwtObject';

export class RightsManager {
    private badRequestError = new BadRequestError();
    private authError = new AuthError()
    private internalError = new InternalError();
    private simpleOkResponse = new SimpleOkResponse();
    private creationOkResponse = new CreationOkResponse();
    private services = new Services();
}