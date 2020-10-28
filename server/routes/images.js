let express = require("express"),
	multer = require("multer"),
	mongoose = require("mongoose"),
	uuidv4 = require("uuid/v4"),
	router = express.Router();

const DIR = "./uploads";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		const fileName = file.originalname.toLowerCase().split(" ").join("-");
		cb(null, uuidv4() + "-" + fileName);
	},
});

var upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (
			file.mimetype == "image/png" ||
			file.mimetype == "image/jpg" ||
			file.mimetype == "image/jpeg"
		) {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
		}
	},
});

// User model
let Item = require("../models/image");

router.post(
	"/upload-images",
	upload.array("imgCollection", 10), upload.single("file"),
	(req, res, next) => {
		console.log(req.body);
		const reqFiles = [];
		const url = req.protocol + "://" + req.get("host");
		for (var i = 0; i < req.files.length; i++) {
			reqFiles.push(url + "/uploads/" + req.files[i].filename);
		}

		const item = new Item({
			_id: new mongoose.Types.ObjectId(),
			imgCollection: reqFiles,
			name: req.body.name,
			desc: req.body.desc,
			price: req.body.price,
			care: req.body.care,
			size: req.body.size,
			stock: req.body.stock,
			color: req.body.color,
			category: req.body.category,
		});

		item
			.save()
			.then((result) => {
				res.status(201).json({
					success: true,
					result,
				});
			})
			.catch((err) => {
				console.log(err),
					res.status(500).json({
						success:false,
						error: err,
					});
			});
	}
);

router.get("/getAllItems", (req, res, next) => {
	Item.find().then((data) => {
		res.status(200).json({
			items: data,
		});
	});
});

router.get("/getItemById/:id", (req, res, next) => {
	console.log('the id is', req.params.id);
	Item.findById(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
		console.log(data);
		if (err) res.send(err);
		res.status(200).json({
			success: true,
			data,
		});
	})
	.catch(err => console.log(err));
});

router.get("/getItemByCategory/:category", (req, res, next) => {
	console.log(req.params.category);
	Item.find({ category: req.params.category }, (err, data) => {
		if(err) {
			return res.send.json({
				success:false,
				error: err,
			});
		}
		// if (!data) {
		// 	return res.status(200).json({
		// 		success: false,
		// 		message: "No files available",
		// 	});
		// }

		res.status(200).json({
			success: true,
			data,
		});
		
	});

	// }).toArray((err, files) => {
	// 
	// });
});

module.exports = router;
