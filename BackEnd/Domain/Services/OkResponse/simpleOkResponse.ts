import { executionAsyncId } from 'async_hooks';
import { httpResponse } from './../httpResponse';

export class SimpleOkResponse extends httpResponse{
    constructor(){
        super(200)
    }
}