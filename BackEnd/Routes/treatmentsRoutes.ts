import { ServicesController } from './../Controllers/servicesController';
import { TreatmentsController } from './../Controllers/treatmentsController';


export class TreatmentRoutes {
    private baseUrl : string = "/treatment"
    public treatmentController: TreatmentsController = new TreatmentsController();
    public serviceController: ServicesController = new ServicesController();
    public treatmentRoutes(app :any): void{
        app.route(this.baseUrl).get(this.serviceController.checkToken,this.treatmentController.getAllTreatments)
                               .post(this.serviceController.checkToken,this.treatmentController.createTreatment)
                               .delete(this.serviceController.checkToken,this.treatmentController.deleteMultpipleTreatments);

        app.route(this.baseUrl+'/:id').get(this.serviceController.checkToken,this.treatmentController.getTreatment)
                                      .patch(this.serviceController.checkToken,this.treatmentController.updateTreatment)
                                      .delete(this.serviceController.checkToken,this.treatmentController.deleteTreatment)
    }
};
