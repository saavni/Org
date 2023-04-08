const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { response } = require("express");
const { json } = require("body-parser");
require("json-circular-stringify");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    //    res.sendFile(__dirname + "/indexorg.ejs");
    axios.get('https://alms-deed-user-default-rtdb.firebaseio.com/Bhopal.json')
        .then(function (response) {
            // console.log();
            let arr = [];
            for (let i = Object.keys(response.data).length - 9; i < Object.keys(response.data).length; i++) {
                arr.push(Object.values(response.data)[i]);
            }
            const fulldata = JSON.stringify(response.data["-N9wSTmE29zYrjn6V6Io"].description);
            res.render("list", { data: arr });
        })
        .catch((err) => console.log(err))
});
app.listen(5000, function () {
    console.log("Server is running on 4000");
});
