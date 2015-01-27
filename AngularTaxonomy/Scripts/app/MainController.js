var mainController = angular.module("MainControllerModule", []);

//mocks
mainController.controller("MainController", ["$scope", 
	function($scope){

	$scope.status = "angular loaded";
	
}
]);

mainController.controller("MainController3", ["$scope", "TaxonomyMock", 
	function($scope, TaxonomyMock){

	$scope.status = TaxonomyMock.get();
	
	}
]);

mainController.controller("MainController4", ["$scope", "TaxonomyConfig", 
	function($scope, TaxonomyConfig){

	$scope.status = TaxonomyConfig.get();
	
	}
]);

mainController.controller("MainController5", ["$scope", "TaxonomyTransaction", 
	function($scope, TaxonomyTransaction){

	$scope.status = TaxonomyTransaction.execute();
	
	}
]);