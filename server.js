const fs = require("fs");
const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

const { animals } = require("./data/animals");
// added middleware to the server.  We provide a file path to a location in our app (the public folder) and instruct
// the server to make these files static resources.  All of the front-end code can now be accessed without having
// a specific server endpoint created for it.
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});