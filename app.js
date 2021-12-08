const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// requiring routes
const tasks = require("./routes/task");

const connectDB = require("./db/connect");
require("dotenv").config();

//static assets
app.use(express.static("./public"));

//(middleware) parse form data
app.use(express.urlencoded({ extended: false }));
// json so that app.post can pass back data from form.
app.use(express.json());

//middleware to use routes structured
app.use("/api/v1/tasks", tasks);

//routes
app.get("/hello", (req, res) => {
	res.status(200).send("<h1>Hello</h1>");
});

async function start() {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, (req, res) => {
			console.log(`app on post ${PORT}`);
		});
	} catch (err) {
		console.log(err);
	}
}

start();
