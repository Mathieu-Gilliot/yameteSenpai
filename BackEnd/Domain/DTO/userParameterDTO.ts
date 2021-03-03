
export class userParameterDTO {

        private name:string;
        private firstName:string;
        private email:string;
        private password:string;
        private rdv: Array<string>;
        private comments: Array<string>;
        private phoneNumber: number;

        constructor(name:string,firstName:string,email:string,password:string,rdv:Array<string>,comments: Array<string>,phoneNumber: number){
                this.name = name;
                this.firstName = firstName;
                this.email = email;
                this.password = password;
                this.rdv = rdv;
                this.comments = comments;
                this.phoneNumber = phoneNumber
        }

}



