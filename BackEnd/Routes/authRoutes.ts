import { AuthController } from './../Controllers/authController';



export class AuthRoutes {
    private baseUrl = "/auth"
    public authController: AuthController = new AuthController();
    public authRoutes(app :any): void{
        app.route('/').post(this.authController.login)
        app.route(this.baseUrl).patch(this.authController.updateAuth)
    };
}

