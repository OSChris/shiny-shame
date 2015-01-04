angular.module("ReactCharts", [])

.controller("MainCtrl", function ($scope) {
  $scope.items = [];
  $scope.amount = 500;

  $scope.createItems = function () {
    $scope.items = [];
    for (var i = 0; i < $scope.amount; i++) {
      dataPoints = []
        for (var k = 0; k < 8; k++) {
          dataPoints.push(Math.floor(Math.random()*10))
        }
      $scope.items.push({
        dataPoints
      })
    }
  }
})
.directive("reacting", function () {
  return {
    restrict: 'E',
    scope: {
      values:'='
    },
    link:function(scope, element, attributes){
      scope.$watch('values', function (newData, oldData) {
        React.renderComponent(
          ReactList({data:scope.values}),
          element[0]
        )
      })
    }
  }
})
