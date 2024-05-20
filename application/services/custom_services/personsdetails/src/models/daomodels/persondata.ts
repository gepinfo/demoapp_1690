
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const persondataSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   address: { type: String }
})

const persondataModel = mongoose.model('persondata', persondataSchema, 'persondata');
export default persondataModel;
