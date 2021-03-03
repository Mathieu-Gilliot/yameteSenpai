import { httpResponse } from '../httpResponse';


export class BadRequestError extends httpResponse {

   constructor(){
       super(400)
   }
    
}