var urlServiceModule = angular.module("UrlServiceModule", []);

urlServiceModule.factory("UrlService", [ function(){
  var  urlService = {};
	
    urlService.getBaseUrl = function(){
		var pathArray = window.location.pathname.split( '/' );
       var newPathname = "";
       for (i = 0; i < 3; i++) {
	       if (i > 0) { newPathname += "/"; }
	       newPathname += pathArray[i];
	   }
	   
	   var newUrl = window.location.protocol + "//" + window.location.host + newPathname;
		
	return newUrl;
		
    }//query()
	
	// Function to retrieve a query string value.
// For production purposes you may want to use
// a library to handle the query string.
urlService.getQueryStringParameter = function(paramToRetrieve) {
    var params = document.URL.split("?")[1].split("&");
    //var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    	}//for
	}//fuction()
	
	 //hostweburl =decodeURIComponent(getQueryStringParameter("SPHostUrl"));
	  //appweburl =decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    
return urlService;

}//function($http)


]); //.factory([