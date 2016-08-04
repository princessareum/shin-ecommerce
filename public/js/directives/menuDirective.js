angular.module('app').directive('menuDirective', function(){

  return {
    restrict: 'E',
    templateUrl: 'js/directives/menuDirective.html',
    controller: 'menuController'
  }

}); //end of directive
