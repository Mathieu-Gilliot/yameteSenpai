import { ServicesController } from './../Controllers/servicesController';
import { UserController } from './../Controllers/userController';




export class UserRoutes {
    private baseUrl : string = "/user"
    public userController: UserController = new UserController();
    private servicesController: ServicesController = new ServicesController();
    public userRoutes(app: any): void {

        app.route(this.baseUrl).get(this.servicesController.checkToken,this.userController.getConnectedUser)
                               .post(this.servicesController.checkToken,this.userController.createUser)
                               .delete(this.servicesController.checkToken, this.userController.deleteMultipleUser);

        app.route(this.baseUrl + '/:id').get(this.servicesController.checkToken, this.userController.getUserById)
                                        .patch(this.servicesController.checkToken,this.userController.updateUser)
                                        .delete(this.servicesController.checkToken,this.userController.deleteUser);


    }
};

