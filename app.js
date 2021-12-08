const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//static assets
app.use(express.static("./public"));

//(middleware) parse form data
app.use(express.urlencoded({ extended: false }));
// json so that app.post can pass back data from form.
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
	res.status(200).send("<h1>Hello</h1>");
});

// some general routes basic routes require for task mgr 
// app.get("/api/v1/tasks")
// app.post("/api/v1/tasks");
// app.get("/api/v1/tasks/:id");
// app.patch("/api/v1/tasks/:id");
// app.delete("/api/v1/tasks/:id")

app.listen(PORT, (req, res) => {
	console.log(`app on post ${PORT}`);
});
