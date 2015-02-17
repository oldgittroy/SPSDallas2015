<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>
<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
	<script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
	<script type="text/javascript" src="/_layouts/15/sp.js"></script>

	<!-- Add your CSS styles to the following file -->
	<link rel="Stylesheet" type="text/css" href="../Content/App.css" />

	<!-- Add your JavaScript to the following file -->
	<script type="text/javascript" src="../Scripts/lib/underscore-min.js"></script>
	<script type="text/javascript" src="../Scripts/lib/angular.min.1.2.28.js"></script>
	
	<script src="../Scripts/app/App.js" type="text/javascript"></script>
	<script src="../Scripts/app/repositories/ProfileRepository.js" type="text/javascript"></script>	
	<script src="../Scripts/app/domainmodels/GovernanceModel.js" type="text/javascript"></script>
	<script src="../Scripts/app/domainmodels/PeopleModel.js" type="text/javascript"></script>
	<script src="../Scripts/app/Maincontroller.js" type="text/javascript"></script>	
	
	<!--<script src="../Scripts/app/SearchService.js" type="text/javascript"></script>-->
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
	Page Title
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

<div id='content' ng-app='App'>
	<div id='megamenu' ng-controller='MenuController'>
		Menu: &nbsp; &nbsp;  {{menu}}
	</div>
	
	<p>Some body text here</p>
	
	<div id='fatfooter' ng-controller='FooterController'>
		<hr />
		Fat Footer<br />
		{{foot}}
	</div>
</div>

</asp:Content>