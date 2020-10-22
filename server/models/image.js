const mongoose = require("mongoose");
const { stringify } = require("uuid");
const Schema = mongoose.Schema;

const imageSchema = new Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		imgCollection: {
			type: Array,
        },
        name: {
            type: String,
        },
        desc: {
            type: String,
        },
        code: {
            type: String,
        },
        price: {
            type: Number,
        },
        care: {
            type: String,
        },
        size: {
            type: Array,
        },
        stock: {
            type: Number,
        },
	},
	{
		collection: "items",
	}
);

module.exports = mongoose.model("dbItems", imageSchema);
