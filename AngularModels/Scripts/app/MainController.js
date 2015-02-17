var mainController = angular.module("MainControllerModule", []);

//mocks
mainController.controller("MainController", ["$scope", 
	function($scope){

	$scope.status = "angular loaded";
	
}
]);

mainController.controller("MainController2", ["$scope", "GovernanceModel", 
	function($scope, GovernanceModel){

	
	var todo = new GovernanceModel.Model({
		title: "",
		completed: ""
	});
	
	todo.set({title: "do something"});
	
	$scope.status = todo.get("title");
	
	}
]);

mainController.controller("MainController3", ["$scope", "PeopleModel", 
	function($scope, PeopleModel){

	var todo = new PeopleModel.Model();
	$scope.status = todo.get("DisplayName");
	
	}
]);

mainController.controller("MenuController", ["$scope", "PeopleModel", 
	function($scope, PeopleModel){

	var todo = new PeopleModel.Model();
	$scope.menu = todo.get("DisplayName");
	
	}
]);

mainController.controller("FooterController", ["$scope", "PeopleModel", 
	function($scope, PeopleModel){

	var todo = new PeopleModel.Model();
	$scope.foot = todo.get("DisplayName");
	
	}
]);