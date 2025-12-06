const express = require('express');
const mongoose = require('mongoose');
const port = 5000;
const cors = require('cors');
const signupRoute = require('./Routes/SignupRoute');
const loginRoute = require('./Routes/loginRoute');
const contactRoute = require('./Routes/ContactRoute');
const url = "mongodb://127.0.0.1:27017/SmartCanteenUser";
// const Razorpay = require('razorpay')

const app = express();

// const razorpay = new Razorpay({
//   key_id: "rzp_test_RCwoE3wzZ96AgN",
//   key_secret: "8Kz7d5Hc5Onylk2RV5v0GxZo",
// });

//Paymentroute.js
// Create order
// app.post("/create-order", async (req, res) => {
//   try {
//     const { amount } = req.body;
//     const order = await razorpay.orders.create({
//       amount: amount * 100, // in paise
//       currency: "INR",
//     });
//     res.json(order);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error creating order");
//   }
// });

app.use(express.json());
app.use(cors());
app.use('/api/signup',signupRoute);
app.use('/api/login',loginRoute);
app.use('/api/contact',contactRoute);

app.get("/myorders", async(req,res)=>{
    const email = req.query.email;
    const data = await Order.find({email: email});
    res.send(data);
});


mongoose.connect(url)
.then(()=>console.log("Mongoose connect successfully"))
.catch((err)=>console.log(`Error: ${err}`));



app.listen(port, ()=>console.log(`Server is running port ${port}`));