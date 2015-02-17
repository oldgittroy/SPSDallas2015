var peopleModule = angular.module("PeopleModelModule", []);

peopleModule.factory("PeopleModel", ["GovernanceModel", "ProfileRepository",
	function(GovernanceModel, ProfileRepository){
  var  ppl = {};
  
  ppl.Model = function () {	  
    };//Model
	
	ppl.Model.prototype = new GovernanceModel.Model({
		DisplayName: ""
	});
	
	ppl.Model.prototype.set({
		DisplayName: ProfileRepository.query()
		});	
	
   return ppl;   
}//function()

]); //.factory([
