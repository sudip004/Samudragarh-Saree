const express = require('express');
const mongoose = require('mongoose');


 const  ConnectDB  = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Database connected');
}

module.exports = { ConnectDB };

