angular.module('app').service('productService', function($http){
  this.createProduct = function(product){
    return $http({
      method: "POST",
      url: "/api/product",
      data: product
    }).then(function(response){
      return response.data;
    })
  };

  this.getProduct = function(productId){
    return $http({
      method: "GET",
      url: "/api/product?_id=" + productId
    }).then(function(response){
      return response.data;
    })
  };

  this.updateProduct = function(productId, product){
    return $http({
      method: "POST",
      url: "/api/product" + productId,
      data: product
    }).then(function(response){
      return response.data;
    })
  };

  this.deleteProduct = function(productId){
    return $http({
      method: "DELETE",
      url: "/api/product" + productId
    }).then(function(response){
      return response.data;
    })
  };






})
