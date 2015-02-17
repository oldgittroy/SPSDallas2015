var processModule = angular.module("ProcessModelModule", []);

processModule.factory("ProcessModel", ["GovernanceModel",
	function(GovernanceModel){
  var  proc = {};
  
  proc.Model = function () {	  
    };//Model
	
	proc.Model.prototype = new GovernanceModel.Model({
		ProcessName: ""
	});
	
	proc.Model.prototype.set({ProcessName: "Undefined"});	
	
   return proc;   
}//function()

]); //.factory([
