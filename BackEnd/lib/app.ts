import { AuthRoutes } from './../Routes/authRoutes';
import * as express from "express";
import {UserRoutes} from "../Routes/userRoutes";



class App {
    public app: express.Application;
    public userRoutes: UserRoutes = new UserRoutes();
    public authRoutes : AuthRoutes = new AuthRoutes();
    constructor(){
        this.app = express();
        this.config();
        this.userRoutes.userRoutes(this.app);
        this.authRoutes.authRoutes(this.app)
    }
    private config(): void{
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: true}));

    }
}
 export default new App().app;
