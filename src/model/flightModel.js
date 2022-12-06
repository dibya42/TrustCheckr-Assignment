const { time } = require('console');
const mongoose = require('mongoose');


const flightSchema = new mongoose.Schema({

    name:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required: true,
    },
    price:{
        type:Number,
        required:true
    },
    originCity:{
        type:String,
        trim:true,
        lowercase:true,
        required:true
    },
    destinationCity:{
        type:String,
        trim:true,
        lowercase:true,
        required:true
    },
    departureDate:{
        type:Date,
        required:true
    },
    departureTime:{
        type:TimeRanges,
        required:true
    },
    returnDate:{
        type:Date,
    },
    arrivalTime:{
        type:TimeRanges,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("Flight", flightSchema)
