const express = require('express');
const mongoose = require('mongoose');


 const  ConnectDB  = async ()=> {
    await mongoose.connect('mongodb://localhost:27017/ecommerce');
    console.log('Database connected');
}

module.exports = { ConnectDB };

