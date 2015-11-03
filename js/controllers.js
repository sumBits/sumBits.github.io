webctrl = angular.module('app.controllers', []);

webctrl.controller('homeCtrl', function ($scope) {
  $scope.hideinit = false;
  $scope.saminfo = false;
  $scope.henryinfo = false;
  $scope.jordaninfo = false;
  $scope.mattinfo = false;
  $scope.daninfo = false;
  $scope.mouseover = function (n) {
    switch (n) {
      case 0:
        $scope.hideinit = true;
        $scope.henryinfo = false;
        $scope.jordaninfo = false;
        $scope.mattinfo = false;
        $scope.daninfo = false;
        $scope.saminfo = true;
        break;
      case 1:
        $scope.hideinit = true;
        $scope.saminfo = false;
        $scope.jordaninfo = false;
        $scope.mattinfo = false;
        $scope.daninfo = false;
        $scope.henryinfo = true;
        break;
      case 2:
        $scope.hideinit = true;
        $scope.saminfo = false;
        $scope.henryinfo = false;
        $scope.mattinfo = false;
        $scope.daninfo = false;
        $scope.jordaninfo = true;
        break;
      case 3:
        $scope.hideinit = true;
        $scope.saminfo = false;
        $scope.henryinfo = false;
        $scope.jordaninfo = false;
        $scope.daninfo = false;
        $scope.mattinfo = true;
      case 4:
        $scope.hideinit = true;
        $scope.saminfo = false;
        $scope.henryinfo = false;
        $scope.jordaninfo = false;
        $scope.mattinfo = false;
        $scope.daninfo = true;
        break;
    }
  }
  $scope.mouseover_reset = function () {
    $scope.hideinit = false;
    $scope.saminfo = false;
    $scope.henryinfo = false;
    $scope.jordaninfo = false;
    $scope.mattinfo = false;
    $scope.daninfo = false;
  }
});
