const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

// Routes
const index = require("./routes/index");
const aluno = require("./routes/aluno")

let {
  app: { port },
} = require("../../package.json");

const app = express();
port = port || process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Route
app.use("/", index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {},
  });
});

app.listen(port, () =>
  console.log(`Express server listening on http://localhost:${port}`)
);

module.exports = app;
