const express = require("express");
const router = express.Router();
const {
	getTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
} = require("../controllers/tasks");

// some general routes basic routes require for task mgr

// router.route("/").get(getTasks);
// router.route("/").post(createTask);
// router.route("/:id").get(getTask);
// router.route("/:id").patch(updateTask);
// router.route("/:id").delete(deleteTask);

// alternative compile router
router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
