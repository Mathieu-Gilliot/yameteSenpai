import { httpResponse } from './../httpResponse';

export class CreationOkResponse extends httpResponse{
    constructor(){
        super(201)
    }
}