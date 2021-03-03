import { userParameterDTO } from './../../DTO/userParameterDTO';
import { IUserModel } from './../../../Interfaces/IUser';


export class userParameterDTOHandler{

    public static toUserParameterDTO(objectToDto:IUserModel){
      return new userParameterDTO(objectToDto.name,objectToDto.firstName,objectToDto.email,objectToDto.password,objectToDto.rdv,objectToDto.comments,objectToDto.phoneNumber) 
    }
}
