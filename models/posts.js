const mongoose = require('mongoose');

//Define schema
const Schema = mongoose.Schema;

//Define post schema
const PostSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false,
    },
    body: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: [2022, 'Year must not be less than 2022'] //validate with custom message
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    lastUpdateAt: {
        type: Date,
        default: Date.now
    },
});


//Export the model
module.exports = mongoose.model('Posts', PostSchema);