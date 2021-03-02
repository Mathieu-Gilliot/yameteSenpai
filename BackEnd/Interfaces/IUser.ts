
export interface IUserModel{
    name:string;
    firstName:string;
    email:string;
    password:string;
    phoneNumber: number;
    rdv:Array<string>,
    comments:Array<string>
}

export interface IUserDTO{
    name:string;
    firstName:string;
    rdv:Array<string>,
    comments:Array<string>
}