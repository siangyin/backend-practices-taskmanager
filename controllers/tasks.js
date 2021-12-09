const Task = require("../models/TaskSchema");

const getTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const createTask = async (req, res) => {
	try {
		// console.log(req.body) //{ name: 'boooi', completed: true }
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const getTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findOne({ _id: id });
		if (!task) {
			return res.status(404).json({ msg: `no task id:${id}` });
		}

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const updateTask = async (req, res) => {
	// {option} after req.body allow return latest data, and run validation for new data
	try {
		const { id } = req.params;
		const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
			new: true,
			runValidators: true,
		});
		if (!task) {
			return res.status(404).json({ msg: `no task id:${id}` });
		}

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findOneAndDelete({ _id: id });
		if (!task) {
			return res.status(404).json({ msg: `no task id:${id}` });
		}

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
