const express = require("express")
const mongoose = require("mongoose")

const SareeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    catagory:{
        type:String
    },
    price:{
        type:String
    },
    stock:{
        type:Number
    },
    mobileNumber:{
        type:Number,
    },
    pic:{
        type:String
    }
})

const SareeModel = new mongoose.model("Sarees",SareeSchema)

module.exports = {SareeModel}