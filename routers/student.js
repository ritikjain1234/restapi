const express = require("express")
const router = new express.Router();
const studentinfo = require("../models/student")

router.post("/student", async(req,res)=>{
    try {
        const studentRecords = new studentinfo(req.body);
        console.log(req.body);
        const insertstudent = await studentRecords.save();
        res.status(201).send(insertstudent);
    } catch (error) {
        res.status(400).send(error)
    }
});


router.get("/student", async(req,res)=>{
    try {
        const getStudentInfo = await studentinfo.find();
        console.log(getStudentInfo);
        res.status(201).send(getStudentInfo);
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get("/student/:id", async(req,res)=>{
    try {
        const _id = req.params.id;
        const getStudentInfo = await studentinfo.find({_id});
        console.log(getStudentInfo);
        res.status(201).send(getStudentInfo);
    } catch (error) {
        res.status(400).send(error)
    }
});

router.patch("/student/:id", async(req,res)=>{
    try {
        const _id = req.params.id;
        const updateStudentInfo = await studentinfo.findByIdAndUpdate(_id,req.body);
        console.log(req.body);
        res.status(201).send(updateStudentInfo);
    } catch (error) {
        res.status(400).send(error)
    }
});

router.delete("/student/:id", async(req,res)=>{
    try {
        const updateStudentInfo = await studentinfo.findByIdAndDelete(req.params.id);
        console.log(req.params.id);
        res.status(201).send(updateStudentInfo);
    } catch (error) {
        res.status(400).send(error)
    }
});

module.exports = router;