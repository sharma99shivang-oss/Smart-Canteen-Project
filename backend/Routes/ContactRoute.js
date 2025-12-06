const express = require('express');
const contactRoute = express.Router();
const contactModel = require('../Models/contactModel');


contactRoute.post('/', async (req, res)=>{
    const contact = await contactModel.create(req.body);
    res.json({
        "msg":"success",
        "value":contact
    });
});


contactRoute.post('/', async (req,  res)=>{
    const contact = await contactModel.find();
    res.json({
        "msg":"success",
        "value":contact
    });
});


module.exports = contactRoute;