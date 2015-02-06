var mainController = angular.module("MainControllerModule", []);

//mocks
mainController.controller("MainController", ["$scope", 
	function($scope){

	$scope.status = "angular loaded";
	
}
]);

mainController.controller("MainController2", ["$scope", "UrlService", 
	function($scope, UrlService){

	$scope.status = UrlService.getBaseUrl();
	
	}
]);

mainController.controller("MainController3", ["$scope", "UrlService", "ProfileREST", 
	function($scope, UrlService, ProfileREST){

	var url = UrlService.getBaseUrl();
	ProfileREST.query(url)
	.success(function (data) {
			//$scope.status = data.d.results;
			$scope.status = data.DisplayName;
		})
		.error(function (error) {
			$scope.status = "Unable to load user profiles" + error.message;
		});
	
	
	}
]);

