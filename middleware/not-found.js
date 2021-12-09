const notFound = (res, req) => {
	return res.status(404).send("Route not found");
};

module.exports = notFound;
