
export class userResponseDTO {

    public name:string;
    public firstName:string;
    public rdv: Array<string>;
    public comments: Array<string>;
    public phoneNumber: number;

    constructor(name:string,firstName:string,rdv:Array<string>,comments: Array<string>,phoneNumber: number){
            this.name = name;
            this.firstName = firstName;
            this.rdv = rdv;
            this.comments = comments;
            this.phoneNumber = phoneNumber
    }

}



