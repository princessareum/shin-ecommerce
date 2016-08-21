angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');


  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './routes/home.html'
    })

    .state('flats', {
      url: '/flats',
      templateUrl: './routes/flats.html',
      controller: 'flatsController'
    })

    .state('heels', {
      url: '/heels',
      templateUrl: './routes/heels.html',
      controller: 'heelsController'
    })

    .state('boots', {
      url: '/boots',
      templateUrl: './routes/boots.html'
    })

    .state('sandals', {
      url: '/sandals',
      templateUrl: './routes/sandals.html'
    })

    .state('sneakers', {
      url: '/sneakers',
      templateUrl: './routes/sneakers.html'
    })

    .state('athletic', {
      url: '/athletic',
      templateUrl: './routes/athletic.html'
    })

    .state('cart', {
      url: '/cart',
      templateUrl: './routes/cart.html'
    })

    .state('admin', {
      url: '/admin',
      templateUrl: './routes/admin.html',
      controller: 'adminController'
    })



});
