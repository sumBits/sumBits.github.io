var website = angular.module('app', ['app.controllers', 'ui.router', 'duScroll', 'ngAnimate']);


website.run(function ($state, $rootScope, $stateParams) {
    //makes states work with html5
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

website.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      //enables html5 mode
      $locationProvider
        .html5Mode({
          enabled: true,
          requireBase: false
        })
        .hashPrefix('!');

        //states
      $stateProvider
        .state('home', {
          url: '',
          templateUrl: 'index.html',
          controller: 'homeCtrl'
        });
});
