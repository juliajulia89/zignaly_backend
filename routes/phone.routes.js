const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const Phone = require("../models/Phone.model");

//  GET /api/phones -  Retrieves all of the phones
router.get("/phones", (req, res, next) => {
  Phone.find()
    .then((allPhones) => res.json(allPhones))
    .catch((err) => res.json(err));
});

//  GET /api/phones/:phoneId  - Retrieves a specific phone by id
router.get("/phones/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;
  Phone.findById(phoneId)
    .then((phone) => res.json(phone))
    .catch((error) => res.json(error));
});


module.exports = router;
