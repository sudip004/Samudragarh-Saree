import  { useState } from 'react';


const OnlinePayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryChange = (e) => {
    setExpiry(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="payment-section">
      <h2 style={{color:"violet",fontWeight:"bold",textShadow:"2px 1px 1px violet"}}>Secure Payment</h2>
      <div className="card">
        <div className="card-input">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>
        <div className="card-input">
          <label htmlFor="expiry">Expiry</label>
          <input
            type="text"
            id="expiry"
            placeholder="MM/YY"
            value={expiry}
            onChange={handleExpiryChange}
          />
        </div>
        <div className="card-input">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            placeholder="123"
            value={cvv}
            onChange={handleCvvChange}
          />
        </div>
        <div className="card-input">
          <label htmlFor="name">Card Holder Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <button className="pay-button">Pay Now</button>
      </div>
    </div>
  );
};

export default OnlinePayment;
