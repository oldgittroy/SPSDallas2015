var profileModule = angular.module("ProfileRepositoryModule", []);

profileModule.factory("ProfileRepository", [ function(){
  var  Profile = {};

 Profile.query = function(){
	 return "Jane Doe";
    }//query()
return Profile;
}//function()
]); //.factory([