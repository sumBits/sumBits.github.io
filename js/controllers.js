webctrl = angular.module('app.controllers', []);

webctrl.controller('homeCtrl', function ($scope) {
  $scope.products = info;
  var info = [{
    namefirst: 'Sam',
    namelast: 'Allen',
    picture: 'img/sam.jpg',
    description: 'please work'
  }, {
    namefirst: 'Jordan',
    namelast: 'Jones',
    picture: 'img/jordan.jpg',
    description: 'hbak; lknbasn;kldsvjfbk;n;'
  }, {
    namefirst: 'Henry',
    namelast: 'Kaufman',
    picture: 'img/placeholder.jpg',
    description: 'hey'
  }, {
    namefirst: 'Matthew',
    namelast: 'Price',
    picture: 'img/placeholder.jpg',
    description: 'hedav'
  }, {
    namefirst: 'Daniel',
    namelast: 'Zamosh',
    picture: 'img/daniel.jpg',
    description: 'heyfvabbasfrdf'
  }];


});
