//* require block
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

const app = express();

//* middleware block
app.use(logger("dev"));
app.use(express.json());
// app.use(favicon(path.join(__dirname, "dist", "favicon.ico")));
//creates a route for every file in the dist folder
app.use(express.static(path.join(__dirname, "dist")));

//* routes block
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  }
);
//* listen block
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
