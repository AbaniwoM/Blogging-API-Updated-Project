const express = require("express");
const bodyParser = require("body-parser");
const CONFIG = require("./config/config");
const connectToDb = require("./db/mongodb");

const app = express();

//Routes
const postRouter = require("./routes/posts_routes");

//Connect to MongoDB Database
connectToDb();

//Add Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/posts", postRouter);

app.get("/", (req, res) => {
    res.send("Hello Bloggingapi");
});

//Error handler middleware
app.use((err, req, res, next) => {
    console.log(err);
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message);

    next();
});

app.listen(CONFIG.PORT, () => {
   console.log(`Server started on http://localhost:${CONFIG.PORT}`);
});

