import {UserController} from "../controllers/userController";


export class Routes {
    public userController: UserController = new UserController();
    public userRoutes(app :any): void{
        app.route("/").get()
        .post(this.userController.login);
        app.route('/create').post(this.userController.createUser)
    }
};

