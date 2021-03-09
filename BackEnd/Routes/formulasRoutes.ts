import { ServicesController } from './../Controllers/servicesController';
import { FormulasController } from './../Controllers/formulasController';


export class FormulaRoutes {
    private baseUrl : string = "/formula"
    public formulaController: FormulasController = new FormulasController();
    public serviceController: ServicesController = new ServicesController();
    public formulaRoutes(app :any): void{
        app.route(this.baseUrl).get(this.serviceController.checkToken,this.formulaController.getAllFormulas)
                               .post(this.serviceController.checkToken,this.formulaController.createFormula)
                               .delete(this.serviceController.checkToken,this.formulaController.deleteMultipleFormulas);

        app.route(this.baseUrl+'/:id').get(this.serviceController.checkToken,this.formulaController.getFormula)
                                      .patch(this.serviceController.checkToken,this.formulaController.updateFormula)
                                      .delete(this.serviceController.checkToken,this.formulaController.deleteFormula)
    }
};
