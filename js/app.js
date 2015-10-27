var website = angular.module('app', ['app.controllers', 'ui.router']);


website.run(function ($state, $rootScope, $stateParams) {
    //makes states work with html5
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

    website.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        //enables html5 mode
        $locationProvider
            .html5Mode(
            {
                enabled: true,
                requireBase: false
            })
            .hashPrefix('!');

        //states
        $stateProvider

            .state('home', {
                url: '/', //bascially like www.websitename.com with nothing at the end
                templateUrl: 'index.html',
                controller: 'homeCtrl'
                //abstract: true
            });
            //.state('sam', {
            //    url: '/sam',
            //    templateUrl: 'templates/sam.html'
            //})
    });
