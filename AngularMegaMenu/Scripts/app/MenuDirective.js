var menuDirectiveModule = angular.module("MenuDirectiveModule", []);

menuDirectiveModule.directive('ngMegaMenu', function () {
    return {        
		restrict: 'EA',
        scope: {
			select: '&'
		},
		link: function(scope, element, attrs){
			
			var optionsObj = {};
			
			optionsObj.rowItems = '3';
			optionsObj.speed = 'fast';
			optionsObj.effect = 'fade';
			optionsObj.fullWidth = 'false';
									
			var jqueryElm = $(element[0]).find('#mega-menu-1');	
			$(jqueryElm).dcMegaMenu(optionsObj);	
		}
	};
		
});

