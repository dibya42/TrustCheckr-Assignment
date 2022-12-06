const flightModel = require('../model/flightModel');


const getFlights = async (req, res) => {
    try {
        let reqParams = req.query;
        let filter = req.query.price;

        if (reqParams) {
            let { name, price, originCity, departureDate, destinationCity, departureTime, returnDate, arrivalTime } = reqParams;
        
            if (price) {
                filter.price = {}

                if (price) {
                    price = Number(price)
                    filter.price.$gt = price
                }
                if (price) {
                    price = Number(price)
                    filter.price.$lt = price
                }
            }
        }
        let filterFlight = await flightModel.find(filter).sort({ price: 1 })
        if (filterFlight.length == 0) return res.status(404).send({ status: false, message: "Flight not aveliable" })

        if (filterFlight)
            return res.status(200).send({ status: true, message: "Success", data: filterFlight })
    }
    catch (error) {
        return res.status(500).send({ status: false, error: error.message })
    }
}

module.exports.getFlights = getFlights;