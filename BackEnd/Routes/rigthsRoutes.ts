import { RightsController } from './../Controllers/rightsController';



export class UserRoutes {
    private baseUrl = "/user"
    public rightsController: RightsController = new RightsController();
    public rightsRoutes(app :any): void{

    }
};

