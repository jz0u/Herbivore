const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const strainSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    thc: {
        type: Number,
        required: true
    },

    cbd: {
        type: Number,
        required: true
    },

    effects: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Create and export the model
const Strain = mongoose.model('Strain', strainSchema);
module.exports = Strain;

// If you need to query the database, do it in your route handlers, not in the model file