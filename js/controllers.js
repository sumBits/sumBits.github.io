webctrl = angular.module('app.controllers', []);

webctrl.controller('homeCtrl', function ($scope) {
  $scope.port = function (array_number) {

    var info = [{
      name: 'Sam Allen',
      description: 'heyyyy'
    }]

    $scope.product = info[array_number]

  $scope.newOuter = true;
  }
});
