var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function ($scope) {
  $scope.formModel = {};
  $scope.onSubmit = function () {
    console.log("Hey I'm Submitted");
    console.log($scope.formModel);
  };
});
