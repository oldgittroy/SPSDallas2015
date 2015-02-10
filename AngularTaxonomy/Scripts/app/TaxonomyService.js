var taxonomySvcModule = angular.module("TaxonomyServiceModule", []);

//Unit of Work, transactions
taxonomySvcModule.factory("TaxonomyTransaction", [
	"TaxonomyTermStore", 
	"TaxonomyTermGroups", 
	"TaxonomyTermSets", 
	"TaxonomyTerms",
	function(TaxonomyTermStore, TaxonomyTermGroups, TaxonomyTermSets, TaxonomyTerms){
  var  transaction = {};
  
  var ctx = SP.ClientContext.get_current();
  
  TaxonomyTermStore.query(ctx)
  .then(function(store) {	  
	  TaxonomyTermGroups.query(ctx, store)
	  .then(function (tg){
		  var currentGroup = tg.itemAt(0);
		  
		  TaxonomyTermSets.query(ctx, currentGroup)
		  .then(function (ts){
			  var currentTermSet = ts.itemAt(0);
			  
			  TaxonomyTerms.query(ctx, currentTermSet)
			  .then(function(terms){
				  return terms;
			  })//terms
		  })//term sets
	  })//term groups
  });//term store
  
  
  transaction.execute = function(grpName, termSetName){
	  //var ctx = TaxonomyConfig.get();
	return "This is a test of taxonomy transactions";
    }//query()
   return transaction;
   

}//function()

]); //.factory([


//========================================================================
//unit tests
taxonomySvcModule.factory("TaxonomyMockTransaction", ["TaxonomyConfig", function(TaxonomyConfig){
  var  session = {};
  
  ctx = TaxonomyConfig;
  
  session.get = function(){
	return "This is a test of taxonomy mocking";
    }//query()
   return session;
}//function($http)

]); //.factory([


taxonomySvcModule.factory("TaxonomyConfigTest", ["TaxonomyConfig", function(TaxonomyConfig) {
  var  termStore = {};
  var ctx;
  
  
  termStore.get = function(){	  
		ctx = TaxonomyConfig;
	
	return ctx;
    }//get()
   return termStore;
}//function()

]); //.factory([