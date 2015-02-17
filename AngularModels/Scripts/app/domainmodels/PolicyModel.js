var policyModule = angular.module("PolicyModelModule", []);

policyModule.factory("PolicyModel", ["GovernanceModel",
	function(GovernanceModel){
  var  pol = {};
  
  pol.Model = function () {	  
    };//Model
	
	pol.Model.prototype = new GovernanceModel.Model({
		PolicyName: ""
	});
	
	pol.Model.prototype.set({PolicyName: "Undefined"});	
	
   return pol;   
}//function()

]); //.factory([
