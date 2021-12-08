const mongoose = require("mongoose");

const PW = "11223344";
const COLLECTION_NAME = "tasks-manager-v2";

const connectionString = `mongodb+srv://admin:${PW}@cluster0.ud1ul.mongodb.net/${COLLECTION_NAME}?retryWrites=true&w=majority`;

// connecting to mongoDB by Mongoose
mongoose
	.connect(connectionString)
	.then(() => console.log("DB Connected..."))
	.catch((err) => console.log(err));
