webctrl = angular.module('app.controllers', ['duScroll']);

webctrl.controller('homeCtrl', function ($scope) {

  $scope.hideinit = false;
  $scope.saminfo = false;
  $scope.henryinfo = false;
  $scope.jordaninfo = false;
  $scope.mattinfo = false;
  $scope.daninfo = false;
  $scope.showFinalDiv = false;
  $scope.mouseover = function (n) {
    switch (n) {
      case 0:
        $scope.hideinit = true;
        $scope.showFinalDiv = false;
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.henryinfo = false;
            $scope.jordaninfo = false;
            $scope.mattinfo = false;
            $scope.daninfo = false;
            $scope.saminfo = true;
          });
        }, 2);
        break;
      case 1:
        $scope.hideinit = true;
        $scope.showFinalDiv = false;
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.saminfo = false;
            $scope.jordaninfo = true;
            $scope.mattinfo = false;
            $scope.daninfo = false;
            $scope.henryinfo = false;
          });
        }, 2);
        break;
      case 2:
        $scope.hideinit = true;
        $scope.showFinalDiv = false;
         setTimeout(function () {
          $scope.$apply(function () {
            $scope.saminfo = false;
            $scope.henryinfo = true;
            $scope.mattinfo = false;
            $scope.daninfo = false;
            $scope.jordaninfo = false;
          });
        }, 2);
        break;
      case 3:
        $scope.hideinit = true;
        $scope.showFinalDiv = false;
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.saminfo = false;
            $scope.henryinfo = false;
            $scope.jordaninfo = false;
            $scope.daninfo = false;
            $scope.mattinfo = true;
          });
        }, 2);
        break;
      case 4:
        $scope.hideinit = true;
        $scope.showFinalDiv = false;
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.saminfo = false;
            $scope.henryinfo = false;
            $scope.jordaninfo = false;
            $scope.mattinfo = false;
            $scope.daninfo = true;
          });
        }, 2);
        break;
    }
  }
  $scope.mouseover_reset = function () {
    $scope.saminfo = false;
    $scope.henryinfo = false;
    $scope.jordaninfo = false;
    $scope.mattinfo = false;
    $scope.daninfo = false;
  }

  $scope.finalDiv = function () {
    setTimeout(function () {
      $scope.$apply(function () {
        $scope.showFinalDiv = true;
      });
    }, 2);
  }

});
