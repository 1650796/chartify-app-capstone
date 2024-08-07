const { Schema, model } = require('mongoose');


const ChartSchema = new Schema({
    chartName: {
        type: String,
        required: true,
        maxLength: 100,
    },
    categoryTitle: {
        type: String,
        required: true,
    },
    amountTitle: {
        type: String,
        required: true,
    },

    categoryone: {
        type: String,
        required: true,
    },
    categorytwo: String,
    categorythree: String,
    categoryfour: String,
    categoryfive: String,

    amountone: {
        type: Number,
        required: true,
    },
    amounttwo: Number,
    amountthree: Number,
    amountfour: Number,
    amountfive: Number

});

module.exports = ChartSchema