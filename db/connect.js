const mongoose = require("mongoose");

uri ="mongodb://127.0.0.1:27017/studentInfo";

const connectDB = () => {
    try {
        console.log("database");
    return mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true});
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB;