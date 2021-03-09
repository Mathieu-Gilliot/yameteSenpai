import { EmployeesController } from './../Controllers/employeesController';



export class employeesRoutes {
    private baseUrl : string = "/employees"
    public employeesController: EmployeesController = new EmployeesController();
    public employeesRoutes(app :any): void{

    }
};
