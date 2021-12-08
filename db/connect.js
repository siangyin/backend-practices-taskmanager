const mongoose = require("mongoose");

// connecting to mongoDB by Mongoose
// mongoose
// 	.connect(connectionString)
// 	.then(() => console.log("DB Connected..."))
// 	.catch((err) => console.log(err));

//Refactoring
const connectDB = (url) => {
	return mongoose.connect(url).catch((err) => console.log(err));
};

module.exports = connectDB;
