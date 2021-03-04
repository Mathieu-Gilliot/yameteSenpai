import { RightsController } from './../Controllers/rightsController';



export class RightsRoutes {
    private baseUrl = "/rights"
    public rightsController: RightsController = new RightsController();
    public rightsRoutes(app :any): void{

    }
};

