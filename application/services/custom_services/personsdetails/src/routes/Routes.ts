import { Request, Response, NextFunction } from "express";
import { persondataController } from '../controller/persondataController';


export class Routes {
    private persondata: persondataController = new persondataController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/persondata/:id').delete(this.persondata.Delete);
app.route('/persondata').put(this.persondata.Update);
app.route('/persondata').get(this.persondata.GetAllValues);
app.route('/persondata').post(this.persondata.Create);
app.route('/persondata/userid/created_by').get(this.persondata.GetNounCreatedBy);
     }

}