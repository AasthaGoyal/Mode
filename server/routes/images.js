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
	upload.array("imgCollection", 10),
	(req, res, next) => {
		
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

		res.status(200).json({
			success: true,
			data,
		});
		
	});

});

router.get("/getItemBySearch/:query", (req, res, next) => {
	console.log('the params are', req.params);
	Item.find({ name: req.params.query.name, category: req.params.query.category }, (err, data) => {
		if (err) {
			return res.send.json({
				success: false,
				error: err,
			});
		}

		res.status(200).json({
			success: true,
			data,
		});
	});
});

router.post("/deleteItemById/:id", (req,res,next) => {
	console.log('the id being deleted is', req.params.id)
	Item.findByIdAndRemove(
		new mongoose.Types.ObjectId(req.params.id),
		(err, data) => {
			if (err) {
				return res.status(404).json({ err: err });
			}
			
			res.status(200).json({
				success: true,
				message: `File with ID ${req.params.id} is deleted successfully`,
			});
		}
	);
});

router.put("/updateItemById/:id", (req,res,next) => {
	console.log('request is', req.params.id);
	console.log('the body is', req.body);
	Item.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, data) => {
		if(err) console.log(error);
		console.log('data is', data);
		// if (err) {
		// 	return res.status(404).json({ err: err });

		// }

		// res.status(200).json({
		// 	// success: true,
		// 	// message: `File with ID ${req.params.id} has been updated`,
		// 	data,
		// });
	});

});


module.exports = router;
