// src/pages/Checkout.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("⚠️ Please select a payment method.");
      return;
    }

    if (paymentMethod === "online") {
      // Save total & cart for payment page
      localStorage.setItem("orderSummary", JSON.stringify({ cart, totalPrice }));
      navigate("/payment"); // Go to Payment Page
    } else {
      alert("✅ Order Confirmed! (Cash on Counter)");

      // Clear cart after order
      localStorage.removeItem("cart");
      setCart([]);

      navigate("/myorder");
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">🛍️ Checkout</h2>

      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/menu">Go to Menu</Link>
        </p>
      ) : (
        <>
          {/* Cart Summary */}
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price}</td>
                  <td>₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-end mb-4">
            <h4>Total Amount: ₹{totalPrice}</h4>
          </div>

          {/* Payment Options */}
          <h5>Select Payment Method:</h5>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="online"
                checked={paymentMethod === "online"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">Online Payment</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">Cash on Counter</label>
            </div>
          </div>

          {/* Place Order */}
          <div className="text-end">
            <button
              className="btn btn-primary"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
