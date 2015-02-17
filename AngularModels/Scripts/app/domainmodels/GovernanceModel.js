var governanceModule = angular.module("GovernanceModelModule", []);

governanceModule.factory("GovernanceModel", [
	function(){
  var  gov = {};
  
  gov.Model = function (attributes) {
	  this.id = _.uniqueId("model");
	  this.attributes = attributes || {};
	  
    };//Model
	
	gov.Model.prototype.get = function (attrName) {
		return this.attributes[attrName];
	};
	
	gov.Model.prototype.set = function (attrs) {
		if (_.isObject(attrs)) {
			_.extend(this.attributes, attrs);
			this.change(this.attributes);
		}
	}
	
	gov.Model.prototype.toJSON = function (option) {
		return _.clone(this.attributes);
	}
	
	gov.Model.prototype.change = function (attrs) {
		//this.trigger(this.id + 'update', attrs);	
	}
	
	//_.extend(gov.Model.prototype, gov.events);
	
   return gov;   
}//function()

]); //.factory([
