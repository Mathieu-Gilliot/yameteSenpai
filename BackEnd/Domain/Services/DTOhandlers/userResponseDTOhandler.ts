import { userResponseDTO } from './../../DTO/userResponseDTO';
import { IUserDTO } from './../../../Interfaces/IUser';


export class userResponseDTOHandler {

    public static toUserResponseDTO(objectToDTO:IUserDTO){
        return new userResponseDTO(objectToDTO.name,objectToDTO.firstName,objectToDTO.rdv,objectToDTO.comments,objectToDTO.phoneNumber)
    }

}