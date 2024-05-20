import { Request, Response } from 'express';
import { persondataService } from '../service/persondataService';
import { CustomLogger } from '../config/Logger'
let persondata = new persondataService();

export class persondataController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    persondata.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into persondataController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from persondataController.ts: Delete');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    persondata.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into persondataController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from persondataController.ts: Update');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    persondata.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into persondataController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from persondataController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    persondata.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into persondataController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from persondataController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    persondata.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into persondataController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from persondataController.ts: GetNounCreatedBy');
    })}


}