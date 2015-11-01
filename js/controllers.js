webctrl = angular.module('app.controllers', []);

webctrl.controller('homeCtrl', function ($scope) {
    var repeat = false;
    var devinfo = [{
      name: 'Sam Allen',
      description: 'hey'
    }, {
      name: 'Jordan Jones',
      description: 'hey again'
    }];
    var state = [10];
    $scope.newOuter = function (n) {
      state.push(n);
      if (state[0] === state[1]) {
        repeat = true;
      }
      state.shift()

      if (repeat === true) {
        $scope.hnewOuter = false
      } else {
        $scope.hnewOuter = true;
        $scope.product = devinfo[n];
      }
    }
});
