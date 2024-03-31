const express = require('express');
const mongoose = require('mongoose');


 const  ConnectDB  = async ()=> {
    await mongoose.connect("mongodb+srv://sudipbasakk1234:MmNf1sIsGEsEyhnI@cluster0.jxrylxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('Database connected');
}

module.exports = { ConnectDB };

