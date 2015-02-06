﻿var profileModule = angular.module("ProfileServiceModule", []);

profileModule.factory("ProfileREST", ["$http", function($http){
  var  Profile = {};

 Profile.query = function(baseUrl){
	 var restUrl = baseUrl + "/AngularProfile/_api/SP.UserProfiles.PeopleManager/GetMyProperties";
	 return $http.get(restUrl);
    }//query()
return Profile;
}//function($http)


]); //.factory([


profileModule.factory("ProfileResource", ["$resource", function($resource){
  var  Profile = {};

 Profile.query = function(){
	 
	 var baseUrl = UrlService.getBaseUrl();
	 var restUrl = baseUrl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties";
	 
		return $resource(restUrl);	
	 
    }//query()
    
return Profile;

}//function($http)


]); //.factory([