webctrl = angular.module('app.controllers', ['duScroll']);

webctrl.controller('homeCtrl', function ($scope) {
  //increase when adding animations
  //its in milliseconds
  //note if remove delay_ammount code breaks
  var delay_ammount = 2;

  //defualt values
  $scope.hideinit = false;
  $scope.saminfo = false;
  $scope.henryinfo = false;
  $scope.jordaninfo = false;
  $scope.mattinfo = false;
  $scope.daninfo = false;
  $scope.showFinalDiv = false;
  $scope.textAnimate = '';

  //mouseover on faces
  //casses are which faces
  $scope.mouseover = function (n) {
    switch (n) {
      case 0:
        $scope.hideinit = true;
        $scope.showFinalDiv = false;
        $scope.textAnimate = '';
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.henryinfo = false;
            $scope.jordaninfo = false;
            $scope.mattinfo = false;
            $scope.daninfo = false;
            $scope.saminfo = true;
            setTimeout(function () {
              $scope.$apply(function () {
                $scope.textAnimate = 'fadein';
              });
            }, 50);
          });
        }, delay_ammount);
        break;
      case 1:
        $scope.hideinit = true;
        $scope.showFinalDiv = false;
        $scope.textAnimate = '';
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.saminfo = false;
            $scope.jordaninfo = true;
            $scope.mattinfo = false;
            $scope.daninfo = false;
            $scope.henryinfo = false;
            setTimeout(function () {
              $scope.$apply(function () {
                $scope.textAnimate = 'fadein';
              });
            }, 50);
          });
        }, delay_ammount);
        break;
      case 2:
        $scope.hideinit = true;
        $scope.showFinalDiv = false;
        $scope.textAnimate = '';
         setTimeout(function () {
          $scope.$apply(function () {
            $scope.saminfo = false;
            $scope.henryinfo = true;
            $scope.mattinfo = false;
            $scope.daninfo = false;
            $scope.jordaninfo = false;
            setTimeout(function () {
              $scope.$apply(function () {
                $scope.textAnimate = 'fadein';
              });
            }, 50);
          });
        }, delay_ammount);
        break;
      case 3:
        $scope.hideinit = true;
        $scope.showFinalDiv = false;
        $scope.textAnimate = '';
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.saminfo = false;
            $scope.henryinfo = false;
            $scope.jordaninfo = false;
            $scope.daninfo = false;
            $scope.mattinfo = true;
            setTimeout(function () {
              $scope.$apply(function () {
                $scope.textAnimate = 'fadein';
              });
            }, 50);
          });
        }, delay_ammount);
        break;
      case 4:
        $scope.hideinit = true;
        $scope.showFinalDiv = false;
        $scope.textAnimate = '';
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.saminfo = false;
            $scope.henryinfo = false;
            $scope.jordaninfo = false;
            $scope.mattinfo = false;
            $scope.daninfo = true;
            setTimeout(function () {
              $scope.$apply(function () {
                $scope.textAnimate = 'fadein';
              });
            }, 50);
          });
        }, delay_ammount);
        break;
    }
  }

  //when mouseoverleaves face containing div
  $scope.mouseover_reset = function () {
    $scope.saminfo = false;
    $scope.henryinfo = false;
    $scope.jordaninfo = false;
    $scope.mattinfo = false;
    $scope.daninfo = false;
  }
//when mouseover is on div that contains info
  $scope.finalDiv = function () {
    setTimeout(function () {
      $scope.$apply(function () {
        $scope.showFinalDiv = true;
      });
    }, delay_ammount);
  }

});