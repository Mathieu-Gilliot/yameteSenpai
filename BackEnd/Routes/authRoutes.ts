import { ExpressBrute } from '../Config/expressBrute';
import { AuthController } from './../Controllers/authController';


export class AuthRoutes {
    private baseUrl : string = "/auth";
    private bruteForceControl = new ExpressBrute().bruteForce.prevent;
    public authController: AuthController = new AuthController();
    public authRoutes(app :any): void{
        app.route('/').post(this.bruteForceControl,this.authController.login);
        app.route(this.baseUrl).patch(this.authController.updateAuth);
    };
}

