import * as express from "express";
import {Routes} from "./config/routes";



class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    constructor(){
        this.app = express();
        this.config();
        this.routePrv.userRoutes(this.app);
    }
    private config(): void{
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: true}));

    }
}
 export default new App().app;
