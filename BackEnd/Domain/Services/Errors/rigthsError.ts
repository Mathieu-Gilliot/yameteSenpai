import { httpResponse } from '../httpResponse';


export class RightError extends httpResponse {

   constructor(){
       super(403)
   }

}