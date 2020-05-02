var express         = require("express");
var app             = express();
var bodyParser      = require("body-parser");
var mongoose        = require("mongoose");

var port            = process.env.PORT||1110;

mongoose.connect("mongodb://localhost/colorgame1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));



app.get("/" , function(req,res){
    res.redirect("/rgbgame");
});

app.get("/rgbgame" , function(req,res){
    res.render("index");
});



app.listen(port, function () {
  console.log("Server of rgbGame has started!!");
});


