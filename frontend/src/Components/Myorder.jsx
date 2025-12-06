import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Myorders() {
  const [orders, setOrders] = useState([]);

  const email = localStorage.getItem("email"); // jo login ke time set kiya tha

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/myorders?email=${email}`);
      setOrders(response.data);
    } catch (error) {
      console.log("Error fetching orders", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 style={{textAlign:'center', marginBottom:'20px'}}>My Orders</h2>

      {orders.length === 0 ? (
        <p style={{textAlign:'center'}}>No orders yet!</p>
      ) : (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, index)=>(
                <tr key={index}>
                  <td>{order.itemName}</td>
                  <td>₹{order.price}</td>
                  <td>{order.status}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      )}
    </div>
  );
}
