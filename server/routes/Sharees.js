const express = require('express');
const router = express.Router();

const {GetSaree,UploadSraee,} = require("../controllers/saree-datails");
const {GetProducts,UploadProducts} = require("../controllers/products-details");
const upload = require('../middlewares/multer');

// Get Routes
router.get("/saree",GetSaree)
router.get("/products",GetProducts)
//Post  Routes
router.post("/upload/saree",upload.single("file"),UploadSraee)
router.post("/upload/products",upload.single("file"),UploadProducts)


module.exports = router;