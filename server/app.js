var express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser")
const createError = require('http-errors')


const userRouter = require("./routes/users");
const itemRouter = require("./routes/items");

var app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser());

app.use('/users', userRouter);
app.use('/items', itemRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//const db = require("./connection");

// db.on("error", console.log.bind(console, "connection error"));
// db.once("open", () => {
// 	console.log("connection succeeded");
// });

// app.set('port', process.env.port || 3001);
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs"); 

// app.get("/", function (req, res) {
// 	res.render("Signup");
// });

// app.use("/", usersRouter);




// app.post("/stats", upload.single("image"), function (req, res) {
// 	// req.file is the name of your file in the form above, here 'uploaded_file'
//     // req.body will hold the text fields, if there were any
//     console.log(req.file, req.body);
//     var item = ItemModel({
//         image: req.file.path,
//         category: req.body.category
//     });
//     item.save()
//     .then(res => console.log(res));
   
// });

// app.get("/showItems", function(req,res) {
//     ItemModel.find({}, (err, docs) =>  {
//         if(err) {
//             res.send('some error occured', err)
//         }
//         else {
//             res.send(docs);
//         }
//     })
// })

// Error handling
app.use(function(req, res, next) {
  // catch 404 and forward to error handler
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
