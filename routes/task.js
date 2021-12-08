const express = require("express");
const router = express.Router();
// requiring controllers: callback function for each tasks (getTasks, createTask, getTask, updateTask, deleteTask)

// some general routes basic routes require for task mgr

router.route("/").get((req, res) => {
	res.status(200).send("get all tasks");
});

router.route("/").post((req, res) => {
	res.status(200).send("task created");
});

router.route("/:id").get((req, res) => {
	res.status(200).send(`req for task id: ${req.params.id}`);
});

router.route("/:id").patch((req, res) => {
	res.status(200).send(`update for task id: ${req.params.id}`);
});

router.route("/:id").delete((req, res) => {
	res.status(200).send(`deleting for task id: ${req.params.id}`);
});

//alternative compile router
// router.route("/").get(getTasks).post(createTask);
// router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
