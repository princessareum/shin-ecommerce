var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var config = require("./server_config")





var app = express();

app.use(express.static(__dirname + "./../public"));
app.use(bodyParser.json());
























var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.set("debug", true);
mongoose.connect(mongoURI, (err)=>{
  if(err){
    console.log(err);
  } else{
    console.log("mongoose is ready");
  }
});
mongoose.connection.once("open", ()=>{
  console.log("Connected to MongoDB at", mongoURI);
  app.listen(port, ()=>{
    console.log("Listening on port " + port);
  });
});