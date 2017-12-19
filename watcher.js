var express = require("express"),
    app = express();

app.use(express.static(__dirname + "/public"));

var port = process.env.port || 2000;

app.listen(port, () => {
    console.log(`Todo App running on port `, port);
});