const multer = require("multer");
const uuidv4 = require("uuid/v4");
const path = require("path");
const express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
var fs = require("fs");

let itemModel = require("../models/item");

const db = require("../connection");

db.on("error", console.log.bind(console, "connection error"));
db.once("open", () => {
	console.log("connection succeeded");
});

//configure storage
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		/*
          Files will be saved in the 'uploads' directory. Make
          sure this directory already exists!
        */
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		/*
          uuidv4() will generate a random ID that we'll use for the
          new filename. We use path.extname() to get
          the extension from the original file name and add that to the new
          generated ID. These combined will create the file name used
          to save the file on the server and will be available as
          req.file.pathname in the router handler.
        */
		const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
		cb(null, newFilename);
	},
});
// create the multer instance that will be used to upload/save the file
const upload = multer({ storage });

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/insertItems", upload.single("selectedFile"), (req, res) => {
	console.log(req.file, req.body);
	var newItem = new ItemModel({
		name: req.body.name,
		desc: req.body.description,
		image: req.file.path,
	});

	newItem
		.save()
		.then((item) => {
			res.send(item);
			console.log("item saved in database");
		})
		.catch((err) => {
			res.status(400).send("unable to save database");
			console.log("some error occured");
		});
});

router.get("/getitems", (req, res) => {
	itemModel.find({}, (err, docs) => {
    if (err) res.send(err);
		res.send(docs);
	});
});

module.exports = router;
