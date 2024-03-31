//model for saree
const { SareeModel } = require("../models/sraee-model");

const GetSaree = async (req, res) => {
  try {
    const data = await SareeModel.find();
    if (!data) {
      return res.status(404).json({ message: "get saree not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const UploadSraee = async (req, res) => {
  try {
    const { name, catagory, price, stock, mobileNumber } = req.body;
    const file = req.file.path;
    const data = await SareeModel({
      name,
      catagory,
      price,
      stock,
      mobileNumber,
      pic:file ? file : "",
    });
    if (!data) {
      return res.status(400).json({ message: "Upload saree data not present" });
    }
    await data.save();
    return res.status(200).json({ message: "uploaded successfully" });
  } catch (error) {
    console.log(error);
  }
};


module.exports = { GetSaree, UploadSraee };
