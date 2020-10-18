var mongoose = require("mongoose");
var Schema = mongoose.schema;

var ImageSchema = new Schema({
	imageName: {
		type: String,
		default: "none",
		required: true
	},
	imageData: {
		type : String,
		required: true
	}
});

var Image = mongoose.model("Image", ImageSchema);
module.exports = Image;
