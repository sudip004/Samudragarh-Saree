const express = require('express'); 
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// For DataBase connected
const { ConnectDB } = require('./utils/db');
// Gest Routers
// const Users = require('./routes/Users');

// All Middlewares
app.use(cors());
app.use(express.json());

// For Routes puspose
// app.use('/api',Users);

app.listen(port, async() => {
   await ConnectDB();
    console.log(`Server is running on port ${port}`);
});