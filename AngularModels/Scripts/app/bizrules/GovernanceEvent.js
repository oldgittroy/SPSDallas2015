var governanceModule = angular.module("GovernanceEventModule", []);

governanceModule.factory("GovernanceEvent", [
	function(){
  var  gov = {};
  
  gov.Events = {
	  channels:  {},
	  eventNumber: 0,
	  trigger: function (events, data) {
		  
	  },
	  on: function (evnts, callback) {
		  
	  },
	  off: function (topic) {
		  
	  }
	  
    }//Events
	
	
   return gov;   
}//function()

]); //.factory([


