import { IUserDTO } from './../../../Interfaces/IUser';
import { userResponseDTO } from './../../DTO/userResponseDTO';


export class userResponseDTOHandler{

    public static toUserResponseDTO(objectToDto:IUserDTO){
      return new userResponseDTO(objectToDto.name,objectToDto.firstName,objectToDto.rdv,objectToDto.comments,objectToDto.phoneNumber)
    }
}