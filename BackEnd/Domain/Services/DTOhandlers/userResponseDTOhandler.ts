import { IUserModel } from './../../../Interfaces/IUser';
import { userResponseDTO } from './../../DTO/userResponseDTO';


export class userResponseDTOHandler{

    public static toUserParameterDTO(objectToDto:IUserModel){
      return new userResponseDTO(objectToDto.name,objectToDto.firstName,objectToDto.rdv,objectToDto.comments,objectToDto.phoneNumber) 
    }
}