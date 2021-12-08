const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	name: String,
	completes: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
