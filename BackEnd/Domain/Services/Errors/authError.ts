import { httpResponse } from '../httpResponse';


export class AuthError extends httpResponse {

   constructor(){
       super(401)
   }
    
}