const express = require('express'); 
const app = express();
const path = require('path');
const cors = require('cors');
const dotenv = require("dotenv")
// let __dirname = path.resolve();
dotenv.config()
const port = 3000;
// For DataBase connected
const { ConnectDB } = require('./utils/db');
// Gest Routers
const Sharees = require("./routes/Sharees")

// All Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(path.resolve(), "/client/dist")));

// For Routes puspose
app.use('/api',Sharees);

app.get("*", (req, res) => {
	res.sendFile(path.join(path.resolve(), "client", "dist", "index.html"));
});

app.listen(port, async() => {
   await ConnectDB();
    console.log(`Server is running on port ${port}`);
});

//MmNf1sIsGEsEyhnI
//sudipbasakk1234
