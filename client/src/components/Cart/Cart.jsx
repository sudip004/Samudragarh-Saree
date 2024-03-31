import { useGlobalContext } from "../../context/Provider";
import "./Cart.css";

const Cart = () => {
  const { cartData } = useGlobalContext();
  return (
    <>
      {cartData?.map((cartData, i) => (
        <div className="cart-container" key={i}>
          <div className="cart">
            <img src="../../../saree.jpg" alt="" />
            <div className="cart-details">
              <p>Owner: {cartData.owner}</p>
              <p>stock: {cartData.stock}</p>
              <p>price: {cartData.price}</p>
              <button>PAY CASH</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
