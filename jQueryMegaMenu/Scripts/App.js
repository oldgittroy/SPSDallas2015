'use strict';

var context = SP.ClientContext.get_current();
var user = context.get_web().get_currentUser();

(function () {

	// This code runs when the DOM is ready and creates a context object which is 
	// needed to use the SharePoint object model
	$(document).ready(function () {
		getUserName();
		
		jqueryMM();
		setGreyStyle();
		hideEditLinks();
	});

	// This function prepares, loads, and then executes a SharePoint query to get 
	// the current users information
	function getUserName() {
		context.load(user);
		context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
	}

	// This function is executed if the above call is successful
	// It replaces the contents of the 'message' element with the user name
	function onGetUserNameSuccess() {
		$('#message').text('Hello ' + user.get_title());
	}

	// This function is executed if the above call fails
	function onGetUserNameFail(sender, args) {
		alert('Failed to get user name. Error:' + args.get_message());
	}
	
	
	function setGreyStyle() {
	 //wrap the menu in the grey style
        $('#mega-menu-1').addClass('grey');
}

function hideEditLinks() {
	 //suppress edit links so the composite image does not show up on the menu
        $('#zz10_TopNavigationMenu_NavMenu_EditLinks').hide();
        
        $('#zz11_TopNavigationMenu_NavMenu_EditLinks').hide();
        $('#zz12_TopNavigationMenu_NavMenu_EditLinks').hide();
        
}

//code created by the Nasty Hacker
//http://blog-aspc.azurewebsites.net/so-whats-on-the-megamenu/
	
function jqueryMM () {
	var topmenuClass = '.ms-core-listMenu-horizontalBox';
        $(topmenuClass + ' .ms-hidden').html('');
        $(topmenuClass + ' ul li a span').not('[class="ms-navedit-editLinksIconWrapper"]').replaceWith(function () {
            return $(this).html();
        });

        $(topmenuClass + ' ul li a span').not('[class="ms-navedit-editLinksIconWrapper"]').replaceWith(function () {
            return $(this).html();
        });

        $(topmenuClass + ' ul li a span').not('[class="ms-navedit-editLinksIconWrapper"]').replaceWith(function () {
            return $(this).html();
        });

        $(topmenuClass + ' a').each(function () {
            var title = $(this).html();
            var strs = title.split("#");
            if (strs.length > 1) {
                $(this).html(strs[0]);
                $(this).parent().attr('id', strs[1]);
                PopulateFromList($(this).parent());
            }
        });

        $(topmenuClass + ' .ms-core-listMenu-root').attr('id', 'mega-menu-1');
        $(topmenuClass + ' ul').removeClass();
        $(topmenuClass + ' li').removeClass();
        $(topmenuClass + ' a').removeClass();
        $('#mega-menu-tut').removeClass().addClass('menu');
        $(topmenuClass).removeClass();

        $('#mega-menu-1').wrap('<div id="kiosk-searcharea" class="dcjq-mega-menu" />');

        $('#mega-menu-1').dcMegaMenu({
		//$('.demo-container').dcMegaMenu({
            rowItems: '3',
            speed: 'fast',
            effect: 'fade',
            fullWidth: false
        });
        
 

}


})();