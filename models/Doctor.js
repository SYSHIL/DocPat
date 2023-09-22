import {mongoose} from "mongoose"
import bcrypt from 'bcrypt'

const doctorSchema = new mongoose.Schema(
  {

    name: {
      type:String,
      required:true
    },

    age:{
      type:Number,
      required:true
    },

    specialization:{
      type:String
    },

    email:{
      type:String
    },
    
    password:{
      type:String
    }

  });

doctorSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

export default  mongoose.model('Doctor', doctorSchema);