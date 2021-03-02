"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const userController_1 = require("../controllers/userController");
class Routes {
    constructor() {
        this.userController = new userController_1.UserController();
    }
    userRoutes(app) {
        app.route("/").get(this.userController.index)
            .post(this.userController.index);
    }
}
exports.Routes = Routes;
;
//# sourceMappingURL=routes.js.map