angular.module('app').controller('heelsController', function($scope, productService, $stateParams){



  $scope.getProduct = function(){
    productService.getProduct().then(function(response){
      $scope.products = response;
      $scope.heels = [];
      for(var i = 0; i < $scope.products.length; i++){
        if($scope.products[i].category === "heels"){
          $scope.heels.push($scope.products[i]);
        }
      }
    })
  };
  $scope.getProduct();


});
