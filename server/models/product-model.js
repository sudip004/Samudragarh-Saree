const express = require("express")
const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
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

const ProductModel = new mongoose.model("Products",ProductSchema)

module.exports = {ProductModel}