angular.module('app').controller('heelsController', function($scope, productService, $stateParams){


  $scope.getProduct = function(){
    productService.getProduct().then(function(response){
      $scope.products = response;
    })
  };
  $scope.getProduct();




});
