const mongoose = require("mongoose");

var crud = mongoose.model(
	"crud",
	{
		name: { type: String },
		email: { type: String },
		phone: { type: Number },
		hobbies: { type: String },
	},
	"internship"
);

module.exports = { crud };
