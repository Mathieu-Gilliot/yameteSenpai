"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userManager_1 = require("../../Domain/Managers/userManager");
class UserController {
    index(req, res) {
        const userManager = new userManager_1.UserManager();
        userManager.test(req, res);
    }
}
exports.UserController = UserController;
;
//# sourceMappingURL=userController.js.map