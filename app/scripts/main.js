var app = angular.module('ms1', []);
app.controller('MainCtrl',['$scope', function($scope) {
  $scope.nav = function(path) {
	    $scope.filePath = path;
	}; 
}]);