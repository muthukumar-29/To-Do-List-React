const mongoose = require('mongoose');

const ListScheme = new mongoose.Schema({
    title: String,
    content : String
})

const ListModel = mongoose.model("lists",ListScheme);
module.exports = ListModel;