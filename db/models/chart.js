const { Schema, model } = require('mongoose');


const ChartSchema = new Schema({
    chartName: {
        type: String,
        required: true,
        maxLength: 100,
    },
    categoryTitle: String,
    amountTitle: String,

    categoryone: String,
    categorytwo: String,
    categorythree: String,
    categoryfour: String,
    categoryfive: String,

    amountone: Number,
    amounttwo: Number,
    amountthree: Number,
    amountfour: Number,
    amountfive: Number

    /*chartData: [{
        categoryTitle: String,
        amountTitle: String,
        categories: [String],
        amounts: [Number]
    }]*/
});

module.exports = ChartSchema