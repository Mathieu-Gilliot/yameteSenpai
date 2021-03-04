
export class userParameterDTO {

        public name:string;
        public firstName:string;
        public email:string;
        public password:string;
        public rdv: Array<string>;
        public comments: Array<string>;
        public phoneNumber: number;

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



