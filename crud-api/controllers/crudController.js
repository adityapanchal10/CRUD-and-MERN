const express = require("express");

var router = express.Router();

var { crud } = require("../models/crud");

var ObjectID = require("mongoose").Types.ObjectId;

router.get("/", (req, res) => {
	crud.find((err, docs) => {
		if (!err) res.send(docs);
		else
			console.log(
				"Error while retrieving records: " + JSON.stringify(err, undefined, 2)
			);
	});
});

router.post("/", (req, res) => {
	var newRecord = new crud({
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		hobbies: req.body.hobbies,
	});
	newRecord.save((err, docs) => {
		if (!err) res.send(docs);
		else
			console.log(
				"Error while creating new record: " + JSON.stringify(err, undefined, 2)
			);
	});
});

router.put("/:id", (req, res) => {
	if (!ObjectID.isValid(req.params.id))
		return res.status(400).send("No record with given id: " + req.params.id);

	var updatedRecord = {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		hobbies: req.body.hobbies,
	};

	crud.findByIdAndUpdate(
		req.params.id,
		{ $set: updatedRecord },
		{ new: true },
		(err, docs) => {
			if (!err) res.send(docs);
			else
				console.log(
					"Error while updating a record: " + JSON.stringify(err, undefined, 2)
				);
		}
	);
});

router.delete("/:id", (req, res) => {
	if (!ObjectID.isValid(req.params.id))
		return res.status(400).send("No record with given id: " + req.params.id);

	crud.findByIdAndRemove(req.params.id, (err, docs) => {
		if (!err) res.send(docs);
		else
			console.log(
				"Error while deleting a record : " + JSON.stringify(err, undefined, 2)
			);
	});
});

module.exports = router;
