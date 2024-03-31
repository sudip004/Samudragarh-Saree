const {ProductModel} = require("../models/product-model")

const UploadProducts = async (req,res)=>{
    try {
        const {name,price,stock,mobileNumber} = req.body;
        const file = req.file.path;
        const data = await ProductModel({
            name,
            price,
            stock,
            mobileNumber,
            pic:file
        })
        if(!data){
            return res.status(400).json({message:"Upload product data not present"})
        }
        await data.save();
        return res.status(200).json({message:"uploaded successfully"})
    } catch (error) {
        res.status(500).json({error})
    }

}

const GetProducts =async (req,res)=>{
    try {
        const data = await ProductModel.find();
        if(!data){
            return res.status(404).json({message:"get product not found"})
        }
        return res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error})
    }

}

module.exports = {UploadProducts,GetProducts}