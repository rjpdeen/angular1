(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
	$scope.name = "Ron"
	$scope.myName = function (){ 
		return $scope.name + "!!!!";
	}
});

})();
