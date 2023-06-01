const express = require("express");
const connectDB = require("./db/connect");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("hi");
});
const start = async() => {
    try {
        app.listen(PORT,()=>{
            console.log(`${PORT} : i am live`);
        })
    } catch (error){
        console.log(error);
    }
}
start();