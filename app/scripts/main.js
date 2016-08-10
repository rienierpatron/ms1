var app = angular.module('ms1', []);
app.controller('MainCtrl',['$scope', function($scope) {
  $scope.nav = function(event, path) {
  		$('.mainNav').removeClass('active');
  		console.log(event);
	    $scope.filePath = path;
	}; 
}]);