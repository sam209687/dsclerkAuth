import {Schema, model, models} from 'mongoose';


const userSchema = new Schema({
   clerkId : {
    type : String,
    required : true,
    unique : true
   },

   email : {
    type : String,
    required : true,
    unique : true
   },

   username : {
    type : String,
    required : true,
    
   },

   photo : {
    type : String,
    required : true,
   },

   phone : {
    type : String,
    required : true,
    unique : true
   },
//    password : {
//     type : String,
//     required : true,
//    }
   
})

const UserModel = models?.User || model('User', userSchema);
export default UserModel;