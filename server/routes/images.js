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
let User = require("../models/image");

router.post(
	"/upload-images",
	upload.array("imgCollection", 10),
	(req, res, next) => {
        console.log(req.body);
		const reqFiles = [];
		const url = req.protocol + "://" + req.get("host");
		for (var i = 0; i < req.files.length; i++) {
			reqFiles.push(url + "/uploads/" + req.files[i].filename);
		}

		const user = new User({
			_id: new mongoose.Types.ObjectId(),
            imgCollection: reqFiles,
            name: req.body.name,
            desc: req.body.desc,
            code: req.body.code,
            price: req.body.price,
            care: req.body.care,
            size: req.body.size,
            stock: req.body.stock
		});

		user
			.save()
			.then((result) => {
               
                res.status(201).json({
                    message: "Successfully Uploaded",
                    result
                });
				// res.status(201).json({
				// 	message: "Done upload!",
				// 	userCreated: {
				// 		_id: result._id,
                //         imgCollection: result.imgCollection,
				// 	},
				// });
			})
			.catch((err) => {
				console.log(err),
					res.status(500).json({
						error: err,
					});
			});
	}
);

router.get("/getAllItems", (req, res, next) => {
	User.find().then((data) => {
		res.status(200).json({
			message: "Items list retrieved successfully!",
			items: data,
		});
	});
});

module.exports = router;
