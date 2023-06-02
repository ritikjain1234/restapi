const mongoose = require("mongoose");


const studentSchema = new  mongoose.Schema({
    Roll_No : { type:Number,require:true,unique:true},
    Nmae: {type:String,require:true},
    DoB: Number,
    PhoneNo : Number,
    Adress: String,
    BloodGroup : String 
});
const studentinfo = new  mongoose.model("student",studentSchema);

module.exports = studentinfo;  