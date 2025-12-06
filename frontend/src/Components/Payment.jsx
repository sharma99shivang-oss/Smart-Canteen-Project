// src/pages/Payment.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [orderSummary, setOrderSummary] = useState(null);
  const [method, setMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orderSummary"));
    setOrderSummary(saved);
  }, []);

  const handlePayment = () => {
    if (!method) {
      alert("⚠️ Please select a payment option");
      return;
    }

    // UPI Validation
    if (method === "UPI" && !upiId) {
      alert("⚠️ Please enter your UPI ID");
      return;
    }

    if (method === "UPI") {
      alert(`✅ Payment Successful via UPI: ${upiId}`);
    } else {
      alert(`✅ Payment Successful via ${method}`);
    }

    // Clear after success
    localStorage.removeItem("cart");
    localStorage.removeItem("orderSummary");

    navigate("/myorder");
  };

  if (!orderSummary) {
    return (
      <p className="container py-4">
        No order found. Go back to <a href="/menu">Menu</a>
      </p>
    );
  }

  return (
    <div className="container py-4">
      <h2>💳 Payment Gateway</h2>

      <h5 className="mt-3">Order Total: ₹{orderSummary.totalPrice}</h5>

      <div className="mt-4">
        <h5>Select Payment Option:</h5>

        {/* UPI */}
        <div className="form-check mb-2">
          <input
            type="radio"
            className="form-check-input"
            name="pay"
            value="UPI"
            checked={method === "UPI"}
            onChange={(e) => setMethod(e.target.value)}
          />
          <label className="form-check-label">UPI (Google Pay / PhonePe / Paytm)</label>
        </div>

        {/* If UPI selected → show input box */}
        {method === "UPI" && (
          <div className="mb-3 ms-4">
            <label className="form-label">Enter UPI ID:</label>
            <input
              type="text"
              className="form-control"
              placeholder="example@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>
        )}

        {/* Card */}
        <div className="form-check mb-2">
          <input
            type="radio"
            className="form-check-input"
            name="pay"
            value="Card"
            checked={method === "Card"}
            onChange={(e) => setMethod(e.target.value)}
          />
          <label className="form-check-label">Credit / Debit Card</label>
        </div>

        {/* Netbanking */}
        <div className="form-check mb-2">
          <input
            type="radio"
            className="form-check-input"
            name="pay"
            value="Netbanking"
            checked={method === "Netbanking"}
            onChange={(e) => setMethod(e.target.value)}
          />
          <label className="form-check-label">Net Banking</label>
        </div>
      </div>

      {/* Pay Button */}
      <div className="text-end mt-4">
        <button className="btn btn-success" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Payment;
