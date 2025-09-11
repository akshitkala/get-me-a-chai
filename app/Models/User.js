import mongoose from "mongoose";
import { Schema,model } from "mongoose";

const userSchema = new Schema({
    email:{type:String,required:true,unique:true},
    name:{type:String},
    username:{type:String,required:true,unique:true},
    profilepic:{type:String},
    coverpic:{type:String},
    createdAT:{type:Date,default:Date.now},
    UpdatedAT:{type:Date,default:Date.now}
})



export default mongoose.models.User || model('User',userSchema);
