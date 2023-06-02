const express = require("express");
const connectDB = require("./db/connect");
const  studentinfo = require("./models/student");
const router = require("./routers/student");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("hi");
});
app.use(express.json());

app.use(router)
const start = async() => {
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`${PORT} : i am live`);
        })
    } catch (error){
        console.log(error);
    }
}
start();