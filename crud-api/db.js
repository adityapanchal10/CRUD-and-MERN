const mongoose = require("mongoose");

mongoose.connect(
	"mongodb://localhost:27017/internshipdb",
	{ useUnifiedTopology: true, useNewUrlParser: true },
	(err) => {
		if (!err) console.log("MongoDb connection successful");
		else console.log("Error: " + JSON.stringify(err, undefined, 2));
	}
);
