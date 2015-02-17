var techModule = angular.module("TechnologyModelModule", []);

techModule.factory("TechnologyModel", ["GovernanceModel",
	function(GovernanceModel){
  var  tech = {};
  
  tech.Model = function () {	  
    };//Model
	
	tech.Model.prototype = new GovernanceModel.Model({
		TechnologyName: ""
	});
	
	tech.Model.prototype.set({TechnologyName: "Undefined"});	
	
   return tech;   
}//function()

]); //.factory([
