import { FormulaRoutes } from './../Routes/formulasRoutes';
import { TreatmentRoutes } from './../Routes/treatmentsRoutes';
import { AuthRoutes } from './../Routes/authRoutes';
import * as express from "express";
import {UserRoutes} from "../Routes/userRoutes";
import * as cors from 'cors';


class App {
    public app: express.Application;
    public userRoutes: UserRoutes = new UserRoutes();
    public authRoutes : AuthRoutes = new AuthRoutes();
    public treatmentRoutes : TreatmentRoutes = new TreatmentRoutes();
    public formulasRoutes : FormulaRoutes = new FormulaRoutes();
    constructor(){
        this.app = express();
        this.config();
        this.userRoutes.userRoutes(this.app);
        this.authRoutes.authRoutes(this.app)
        this.formulasRoutes.formulaRoutes(this.app);
        this.treatmentRoutes.treatmentRoutes(this.app);
    }
    private config(): void{
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: true}));
        this.app.use(cors({
            origin:['http://127.0.0.1:5500',"http://api.app.localhost:5500",'http://localhost:5500', 'http://localhost:3000', 'http://api.app.localhost:3000'],
            credentials:true,
        }))
    }
}
 export default new App().app;
