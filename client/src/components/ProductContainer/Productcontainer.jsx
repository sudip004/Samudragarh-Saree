import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ProductCard from "../../pages/ProductCard";
import "./productcontainer.css";
import Cart from "../Cart/Cart";
import UploadSaree from "../../pages/UploadSaree";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context/Provider";
import Calculator from "../../pages/Calculator";
import OnlinePayment from "../../pages/OnlinePayment";

const Productcontainer = () => {
  const { sareeData, setSareeData, setfilterdata } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://samudragarh-saree.vercel.app/api/saree");
      setSareeData(data.data);
    };
    fetchData();
  }, [location.pathname]);

  const handelClick = async () => {
    const filteredSarees = await sareeData.filter((saree) =>
      saree?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
    );
    setfilterdata(filteredSarees);
    navigate("/filter");
  };

  return (
    <div className="productcontainer">
      {/* Navbar-container */}
      <div className="navbar-container">
        {/* Icon for dark & light */}
        <input
          type="text"
          placeholder="Search sharess..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => handelClick()}>search</button>

        <div className="userlogged">
          <span>login</span>
          {/* Avtar */}
        </div>
      </div>
      {/* Products-Container */}
      <Routes>
        <Route path="/" element={<Router />} />
        <Route path="/cart" element={<CartStoring />} />
        <Route path="/upload" element={<SareeUploding />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/calculator" element={<CalculatorData />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default Productcontainer;

export const Router = () => {
  const { sareeData, filterdata } = useGlobalContext();
  console.log("datat", filterdata);
  // console.log("sareedata",sareeData[0]);
  return (
    <div className="product-details-container">
      {/* Product-Card */}
      {sareeData?.map((items, index) => (
        <ProductCard demo={items} key={index} />
      ))}
    </div>
  );
};

export const CartStoring = () => {
  return (
    <div className="product-details-container">
      <Cart />
    </div>
  );
};
export const SareeUploding = () => {
  return (
    <div className="product-details-container">
      <UploadSaree />
    </div>
  );
};
export const Filter = () => {
  const { filterdata } = useGlobalContext();
  return (
    <div className="product-details-container">
      {filterdata?.map((items, index) => (
        <ProductCard demo={items} key={index} />
      ))}
    </div>
  );
};

const CalculatorData = () => {
  return (
    <div className="product-details-container">
      <Calculator />
    </div>
  );
};

const Payment = () => {
  return (
    <div className="product-details-container">
      <OnlinePayment />
    </div>
  );
};
