(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
	$scope.lunch_input = "";
	$scope.message = "";

	$scope.displayMessage = function () {
		$scope.message = checkTooMuch($scope.lunch_input);
	};

	function checkTooMuch (string) {
		if (string == "") {
			return "Please enter data first";
		}
		else {
			var count = 0;
			for (var i=0;i<string.length;i++) {
				if (string.charAt(i) == ",") {
					count++;
				}
			}
			
			if (count < 3) {
				return "Enjoy!";
			}
			else {
				return "Too much!";
			}
		}
	}

};

})();
