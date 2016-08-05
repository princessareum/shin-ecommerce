var Product = require("../models/productModel");


module.exports = {
  CreateProduct: function(req, res, next){
    var newProduct = new Product(req.body);
    newProduct.save(function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  },

  GetProduct: function(req, res, next){
    Product.find(req.query, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  },

  UpdateProduct: function(req, res, next){
    Product.findByIdAndUpdate(req.params.id, req.body, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  },

  DeleteProduct: function(req, res, next){
    Product.findByIdAndRemove(req.params.id, function(err, response){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  }

}; //end of module exports
