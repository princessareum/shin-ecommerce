angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');


  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './routes/home.html'
    });






});
