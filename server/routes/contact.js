const express = require("express");
const routers = express.Router()
const contact = require("../models/contact");

routers.post('/newcontact', (req, res) => {

    const { name, email, phone, subject, message } = req.body;

    const newcontact = new contact({
        name, email, phone, subject, message
    })

    newcontact.save().then(() => {
        console.log("Post saved")
        res.status(200).json({ message: "Contacted successfully" })
    }).catch((err) => {
        console.log(err)
        res.status(400).json({ error: "Not contacted" })
    })
})

module.exports = routers