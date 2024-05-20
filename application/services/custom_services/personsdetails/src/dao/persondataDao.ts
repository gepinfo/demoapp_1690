import * as mongoose from 'mongoose';
import persondataModel from '../models/daomodels/persondata';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class persondataDao {
    private persondata = persondataModel;

    

    constructor() { }
    
    public async Delete(persondataId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into persondataDao.ts: Delete');

    

    
    
    
    this.persondata.findByIdAndRemove(persondataId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from persondataDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(persondataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into persondataDao.ts: Update');

    

    
    
    
    this.persondata.findOneAndUpdate({ _id: persondataData._id }, persondataData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from persondataDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into persondataDao.ts: GetAllValues');

    

    
    
    
    this.persondata.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from persondataDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(persondataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into persondataDao.ts: Create');

    let temp = new persondataModel(persondataData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from persondataDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(persondataData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into persondataDao.ts: GetNounCreatedBy');

    

    
    
    
    this.persondata.aggregate(([
                        { $match: { $and: [{ created_by: persondataData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from persondataDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}