angular.module('app').controller('flatsController', function($scope, productService){

  $scope.getProduct = function(){
    productService.getProduct().then(function(response){
      $scope.products = response;
      $scope.flats = [];
      for(var i = 0; i < $scope.products.length; i++){
        if($scope.products[i].category === "flats"){
          $scope.flats.push($scope.products[i]);
        }
      }
    })
  };
  $scope.getProduct();

})
