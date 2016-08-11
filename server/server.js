var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var config = require("./server_config")

var productCtrl = require("./controllers/productCtrl");



var app = express();

app.use(express.static(__dirname + "./../public"));
app.use(bodyParser.json());



//Product end point
app.post('/api/product', productCtrl.CreateProduct);
app.get('/api/product', productCtrl.GetProduct);
app.get('/api/product/:id', productCtrl.GetProductById);
app.put('/api/product/:id', productCtrl.UpdateProduct);
app.delete('/api/product/:id', productCtrl.DeleteProduct);














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
