export class AuthDTO {


    public email:string;
    public password:string;
    public userId : string;


    constructor(email:string,password:string,userId:string){

            this.email = email;
            this.password = password;
            this.userId = userId

    }

}
