import { Request, Response } from 'express';
import {persondataDao} from '../dao/persondataDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';











let persondata = new persondataDao();

export class persondataService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into persondataService.ts: Delete')
     let  persondataId = req.params.id;
     persondata.Delete(persondataId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from persondataService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into persondataService.ts: Update')
     let  persondataData = req.body;
     persondata.Update(persondataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from persondataService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into persondataService.ts: GetAllValues')
     
     persondata.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from persondataService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into persondataService.ts: Create')
     let  persondataData = req.body;
     persondata.Create(persondataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from persondataService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into persondataService.ts: GetNounCreatedBy')
     let  persondataData = { created_by: req.query.createdby };
     persondata.GetNounCreatedBy(persondataData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from persondataService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}