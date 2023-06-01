const express = require("express");
const app = express();

const PORT = 4000;

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