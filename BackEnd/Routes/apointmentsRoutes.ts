import { ApointmentsController } from './../Controllers/ApointmentsController';



export class employeesRoutes {
    private baseUrl = "/apointment"
    public apointmentsController: ApointmentsController = new ApointmentsController();
    public apointmentsRoutes(app :any): void{

    }
};