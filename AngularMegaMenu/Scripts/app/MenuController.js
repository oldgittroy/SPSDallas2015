var mainController = angular.module("MainControllerModule", []);

mainController.controller("MainController", ["$scope", 
	function($scope){

	$scope.status = "angular rocks!";
	
	
}
]);

