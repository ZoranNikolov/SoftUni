const express = require("express");
const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const routes = require("./routes");
const { authentication } = require("./middlewares/authMiddleware");

const app = express();

app.engine(
	"hbs",
	handlebars.engine({
		extname: "hbs",
	})
);

app.set("view engine", "hbs");

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authentication);
app.use(routes);

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/petstagram");

app.listen(3000, () => console.log("Server is listening on port 3000..."));
