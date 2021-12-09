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
	//const {id}=req.params

	try {
		const id = req.params.id;
		const task = await Task.findOne({ _id: id });
		console.log(task);
		if (!task) {
			return res.status(404).json({ msg: `no task id:${id}` });
		}

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const updateTask = (req, res) => {
	res.status(200).send(`update for task id: ${req.params.id}`);
};

const deleteTask = (req, res) => {
	res.status(200).send(`deleting for task id: ${req.params.id}`);
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
