import { useState } from "react";
import axios from "axios";
import{useNavigate} from 'react-router-dom'

const UploadSaree = () => {
    const navigate = useNavigate();
  const [owner, setOwner] = useState("");
  const [catagory, setcatagory] = useState("");
  const [price, setprice] = useState("");
  const [stock, setstock] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [file, setFile] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", owner);
    formdata.append("catagory", catagory);
    formdata.append("price", price);
    formdata.append("stock", stock);
    formdata.append("mobileNumber", mobilenumber);
    formdata.append("file", file);
       const success= await axios.post('https://samudragarh-saree.vercel.app/api/upload/saree',formdata)
       if(success){
           console.log(success)
           navigate('/')
       }
  };

  return (
    <div className="main-container">
      <div className="box-container">
        <form onSubmit={(e) => handelSubmit(e)} className="form-container">
          <div className="owner">
            <input
              type="text"
              placeholder="Owner name..."
              onChange={(e) => setOwner(e.target.value)}
            />
          </div>
          <div className="catagory">
            <input
              type="text"
              placeholder="Catagoty..."
              onChange={(e) => setcatagory(e.target.value)}
            />
          </div>
          <div className="price">
            <input type="text" placeholder="price..." onChange={e=>setprice(e.target.value)}/>
          </div>
          <div className="stock">
            <input type="text" placeholder="stock..." onChange={e=>setstock(e.target.value)}/>
          </div>
          <div className="mobile-nimber">
            <input type="text" placeholder="mobilemunber" onChange={e=>setmobilenumber(e.target.value)}/>
          </div>
          <div
            className="file"
            style={{
                height: "50px",
                width: "100px",
                border:"none",
                outline:"none",
              wordBreak: "break-word",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <input
              type="file"
              placeholder="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UploadSaree;
