const mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
	// code: Number,
	// name: String,
	// price: Number,
	// description: String,
	// care: String,
	// size: [String],
	// stock: Number,
	name: String,
	description: String,
	filename: String,
	fileId: String
	
});

module.exports = mongoose.model('dbitems', itemSchema);