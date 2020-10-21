const multer = require("multer");
const uuidv4 = require("uuid/v4");
const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
var fs = require("fs");
var config = require("../config");
const GridFsStorage = require("multer-gridfs-storage");
var crypto = require("crypto");
let Image = require("../models/item");

module.exports = (upload) => {
	let gfs;
	const url = config.mongoURI;
	const connect = mongoose.createConnection(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	connect.once("open", () => {
		// initialize stream
		gfs = new mongoose.mongo.GridFSBucket(connect.db, {
			bucketName: "uploads",
		});
		console.log("connection succedded");
	});

	// //configure storage
	// const sttorage = multer.diskStorage({
	// 	destination: (req, file, cb) => {
	// 		/*
	//         Files will be saved in the 'uploads' directory. Make
	//         sure this directory already exists!
	//       */
	// 		cb(null, "./uploads");
	// 	},
	// 	filename: (req, file, cb) => {
	// 		/*
	//         uuidv4() will generate a random ID that we'll use for the
	//         new filename. We use path.extname() to get
	//         the extension from the original file name and add that to the new
	//         generated ID. These combined will create the file name used
	//         to save the file on the server and will be available as
	//         req.file.pathname in the router handler.
	//       */
	// 		const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
	// 		cb(null, newFilename);
	// 	},
	// });
	// create the multer instance that will be used to upload/save the file

	router
		.post("/insertItems", upload.single("file"), (req, res, next) => {
			console.log(req.body);
			Image.findOne({ name: req.body.name })
				.then((image) => {
					console.log(image);
					if (image) {
						return res.status(200).json({
							success: false,
							message: "Image already exists",
						});
					}

					let newImage = new Image({
						name: req.body.name,
						description: req.body.descritption,
						filename: req.file.filename,
						fileId: req.file.id,
					});

					newImage
						.save()
						.then((image) => {
							res.status(200).json({
								success: true,
								image,
							});
						})
						.catch((err) => res.status(500).json(err));
				})
				.catch((err) => res.status(500).json(err));
		})
		.get((req, res, next) => {
			Image.find({})
				.then((images) => {
					res.status(200).json({
						success: true,
						images,
					});
				})
				.catch((err) => res.status(500).json(err));
		});

	router.post("/multiple", upload.array("file", 3), (req, res, next) => {

		res.status(200).json({
			success: true,
			message: `${req.files.length} files uploaded successfully`,
		});
	});


	router.get("/recent", (req, res, next) => {
		Image.findOne({}, {}, { sort: { _id: -1 } })
			.then((image) => {
				console.log("the recent image", image);
				res.status(200).json({
					success: true,
					image,
				});
			})
			.catch((err) => res.status(500).json(err));
	});

	router.get("/getItems", (req,res) => {
		Image.find({}, (err, docs)=> {
			if (err) res.send('Some error ocured', err);
			res.send(docs);
		})
		.then((res) => console.log(res));
	}) ;
	
	router.get("/files", (req, res, next) => {
		// Image.find({}, (err, docs) => {
		//   console.log(docs);
		//   if(err) res.send(err);
		//   res.send(docs);
		// });
		gfs.find().toArray((err, files) => {
			console.log(files);
			if (!files || files.length === 0) {
				return res.status(200).json({
					success: false,
					message: "No files available",
				});
			}

			files.map((file) => {
				if (
					file.contentType === "image/jpeg" ||
					file.contentType === "image/png" ||
					file.contentType === "image/svg"
				) {
					file.isImage = true;
				} else {
					file.isImage = false;
				}
			});

			res.status(200).json({
				success: true,
				files,
			});
		});
	});

	// router.post(
	// 	"/insertItems",
	// 	upload.array("selectedFile", 5),
	// 	(req, res, next) => {
	// 		res.status(200).json({
	// 			success: true,
	// 			message: ` ${req.files.length} files uploaded successfully`,
	// 		});
	// 		console.log(req.file, req.body);

	// 		var newItem = new ItemModel({
	// 			name: req.body.name,
	// 			desc: req.body.description,
	// 			image: req.file.path,
	// 			filename: req.file.filename,
	// 			fileId: req.file.id,
	// 		});

	// 		newItem
	// 			.save()
	// 			.then((item) => {
	// 				res.send(item);
	// 				console.log("item saved in database");
	// 			})
	// 			.catch((err) => {
	// 				res.status(400).send("unable to save database");
	// 				console.log("some error occured");
	// 			});
	// 	}
	// );

	// router.get("/getitems", (req, res, next) => {
	// 	gfs.find.toArray((err, docs) => {
	// 		if (!docs || docs.length === 0) {
	// 			return res.status(200).json({
	// 				success: false,
	// 				message: "No files available",
	// 			});
	// 		}

	// 		files.map((file) => {
	// 			if (
	// 				file.contentType === "image/jpeg" ||
	// 				file.contentType === "image/png" ||
	// 				file.contentType === "image/svg+xml"
	// 			) {
	// 				file.isImage = true;
	// 			} else {
	// 				file.isImage = false;
	// 			}
	// 		});

	// 		res.status(200).json({
	// 			success: true,
	// 			files,
	// 		});
	// 	});
	// });
	return router;
};
