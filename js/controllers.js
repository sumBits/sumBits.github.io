webctrl = angular.module('app.controllers', ['duScroll']);

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
        $scope.jordaninfo = true;
        $scope.mattinfo = false;
        $scope.daninfo = false;
        $scope.henryinfo = false;
        break;
      case 2:
        $scope.hideinit = true;
        $scope.saminfo = false;
        $scope.henryinfo = true;
        $scope.mattinfo = false;
        $scope.daninfo = false;
        $scope.jordaninfo = false;
        break;
      case 3:
        $scope.hideinit = true;
        $scope.saminfo = false;
        $scope.henryinfo = false;
        $scope.jordaninfo = false;
        $scope.daninfo = false;
        $scope.mattinfo = true;
        break;
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
