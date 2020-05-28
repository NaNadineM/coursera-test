(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";

  $scope.checkAmount = function(){
    if(!$scope.input){
      $scope.message = "Please enter data first";
    }else{
      let amount = $scope.input.split(',').length;
      if(amount<=3){
        $scope.message = "Enjoy!";
      }else if(amount>3){
        $scope.message = "Too much!";
      }
    }
  };
}
})();
