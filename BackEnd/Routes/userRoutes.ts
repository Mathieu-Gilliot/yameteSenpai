import { ServicesController } from './../Controllers/servicesController';
import { UserController } from './../Controllers/userController';




export class UserRoutes {
    private baseUrl : string = "/user"
    public userController: UserController = new UserController();
    private servicesController: ServicesController = new ServicesController();
    public userRoutes(app: any): void {

        app.route(this.baseUrl)
            .delete(this.servicesController.checkToken, this.userController.deleteMultipleUser);

        app.route(this.baseUrl + '/create').post(this.userController.createUser);

        app.route(this.baseUrl + '/:id').get(this.servicesController.checkToken, this.userController.getUserById)
            .patch(this.userController.updateUser)
            .delete(this.userController.deleteUser);

        app.route(this.baseUrl + '/test').post(this.userController.getUserById);
    }
};

