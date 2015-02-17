var pplhastechModule = angular.module("PeopleHasTechRelModule", []);

pplhastechModule.factory("PeopleHasTechRel", ["GovernanceModel",
	function(GovernanceModel){
  var  ppltech = {};
  
  ppltech.Relation = function () {	  
    };//Relation
	
	ppltech.Relation.prototype = new GovernanceModel.Model({
		DisplayName: "",
		TechnologyName: ""
	});
	
	ppltech.Relation.prototype.set({
		DisplayName: "Undefined",
		TechnologyName: "Undefined"
		});	
	
   return ppltech;   
}//function()

]); //.factory([
