var taxonomyModule = angular.module("TaxonomyServiceModule", []);

//Configuration Object for data context
taxonomyModule.factory("TaxonomyConfig", [ function(){
	return SP.ClientContext.get_current();
}//function()

]); //.factory([


//Repositories

//Term Store Repository
taxonomyModule.factory("TaxonomyTermStore", ["$q", function($q) {
	var termStore = {};
	
	termStore.query = function (ctx) {
		
		//SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function (){
		//var ctx = TaxonomyConfig.get();
		var session = SP.Taxonomy.TaxonomySession.getTaxonomySession(ctx);
		var ts = session.getDefaultSiteCollectionTermStore();
		//});
		
		var delay = $q.defer();
		
		ctx.load(session);
		ctx.load(ts);
		
		ctx.executeQueryAsync( function () {
			delay.resolve(ts);
		    alert("term store loaded");
		  }, 
		  function (sender, args) {
			  delay.reject("unable to load term store");
			  alert('term store loading failed. ' + args.get_message() + '\n' + args.get_stackTrace());
		  });
		
		return delay.promise;
	};
	return termStore;
	
}//function($q)
]); //.factory([

//Term Groups Repository
taxonomyModule.factory("TaxonomyTermGroups", ["$q", function($q) {
	var termGroups = {};
	
	termGroups.query = function (ctx, ts) {
		var groups = ts.get_groups();
				
		var delay = $q.defer();
		
		ctx.load(groups);
		ctx.executeQueryAsync( function () {
			delay.resolve(groups);
		    alert("term groups loaded");
			
		  }, 
		  function (sender, args) {
			  delay.reject("unable to load term groups");
			  alert('term store loading failed. ' + args.get_message() + '\n' + args.get_stackTrace());
		  });
		
		return delay.promise;
	};
	
	return termGroups;
}//function($q)
]); //.factory([


//Term Sets Repository
taxonomyModule.factory("TaxonomyTermSets", ["$q", function($q) {
	var termSets = {};
	
	termSets.query = function (ctx, currentGroup) {
		
		termSets = currentGroup.get_termSets();		
		
		var delay = $q.defer();
		
		ctx.load(termSets);		
		ctx.executeQueryAsync( function () {
			delay.resolve(termSets);
		    alert("term sets loaded");
			
		  }, 
		  function (sender, args) {
			  delay.reject("unable to load term sets");
			  alert('term store loading failed. ' + args.get_message() + '\n' + args.get_stackTrace());
		  });
		
		return delay.promise;
	};
	
}//function($q)
]); //.factory([


//Term Set Custom Properties Repository
taxonomyModule.factory("TaxonomyTermSetProps", ["$q", function($q) {
	var termSetProps = {};
	
	termSetProps.query = function (ctx, termSet) {
		
		props = termSet.get_customProperties();		
		
		var delay = $q.defer();
		
		ctx.load(props);		
		ctx.executeQueryAsync( function () {
			delay.resolve(props);
		    alert("term sets loaded");
			
		  }, 
		  function (sender, args) {
			  delay.reject("unable to load term properties");
			  alert('term store loading failed. ' + args.get_message() + '\n' + args.get_stackTrace());
		  });
		
		return delay.promise;
	};
	return termSetProps;
}//function($q)
]); //.factory([


//Terms Repository
taxonomyModule.factory("TaxonomyTerms", ["$q", function($q) {
	var terms = {};
	
	terms.query = function (ctx, termSet) {
		
		terms = termSet.get_terms();		
		
		var delay = $q.defer();
		
		ctx.load(terms);	
		ctx.executeQueryAsync( function () {
			delay.resolve(terms);
		    alert("terms loaded");
			
		  }, 
		  function (sender, args) {
			  delay.reject("unable to load terms");
			  alert('term store loading failed. ' + args.get_message() + '\n' + args.get_stackTrace());
		  });
		
		return delay.promise;
	};
	
}//function($q)
]); //.factory([


//Term Custom Properties Repository
taxonomyModule.factory("TaxonomyTermProps", ["$q", function($q) {
	var termProps = {};
	
	termProps.query = function (ctx, currntTerm) {
		
		props = currntTerm.get_customProperties();		
		
		var delay = $q.defer();
		
		ctx.load(props);	
		ctx.executeQueryAsync( function () {
			delay.resolve(props);
		    alert("terms loaded");
			
		  }, 
		  function (sender, args) {
			  delay.reject("unable to load properties");
			  alert('term store loading failed. ' + args.get_message() + '\n' + args.get_stackTrace());
		  });
		
		return delay.promise;
	};
	return termProps;
	
}//function($q)
]); //.factory([

//Unit of Work, transactions
taxonomyModule.factory("TaxonomyTransaction", ["TaxonomyTermStore", "TaxonomyTermGroups", 
	function(TaxonomyTermStore, TaxonomyTermGroups){
  var  transaction = {};
  
  var ctx = SP.ClientContext.get_current();
  var ts = TaxonomyTermStore.query(ctx);
  var tg = TaxonomyTermGroups.query(ctx, ts);
  
  transaction.execute = function(grpName, termSetName){
	  //var ctx = TaxonomyConfig.get();
	return "This is a test of taxonomy transactions";
    }//query()
   return transaction;
   

}//function()

]); //.factory([


//========================================================================
//unit tests
taxonomyModule.factory("TaxonomyMockTransaction", ["TaxonomyConfig", function(TaxonomyConfig){
  var  session = {};
  
  ctx = TaxonomyConfig;
  
  session.get = function(){
	return "This is a test of taxonomy mocking";
    }//query()
   return session;
}//function($http)

]); //.factory([


taxonomyModule.factory("TaxonomyConfigTest", ["TaxonomyConfig", function(TaxonomyConfig) {
  var  termStore = {};
  var ctx;
  
  
  termStore.get = function(){	  
		ctx = TaxonomyConfig;
	
	return ctx;
    }//get()
   return termStore;
}//function()

]); //.factory([