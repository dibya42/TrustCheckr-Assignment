const express = require("express")
const route = express.Router();
const flightController = require('../controller/flightController');
//const flightModel = require('../model/flightModel');

route.get("/getFlights",flightController.getFlights);

module.exports = route;