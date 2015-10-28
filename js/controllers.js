webctrl = angular.module('app.controllers', []);

webctrl.controller('homeCtrl', function ($scope) {
  $scope.port = function (n) {
    $scope.newOuter = false;
    $scope.newOuterHide = true;
    var last_state = []
    last_state.push(n);
    switch (n) {
      case 0:
        if (last_state[0] === last_state[1]) {
          $scope.newOuterHide = true;
          $scope.newOuter = false;
        } else {
          $scope.newOuterHide = false;
          $scope.newOuter = true;
        }
        last_state.shift();
        break;
    }
    var info = [{
      name: 'Sam Allen',
      description: 'heyyyy'
    }]

    $scope.product = info[n]
  }
});
