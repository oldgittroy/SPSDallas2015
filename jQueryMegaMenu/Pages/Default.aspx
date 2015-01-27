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
	
	<script type="text/javascript" src="../Scripts/lib/jquery.dcmegamenu.1.3.3.min.js"></script>
	<script type="text/javascript" src="../Scripts/lib/jquery.hoverintent.minified.js"></script>

	<!-- Add your CSS styles to the following file -->
	<link rel="Stylesheet" type="text/css" href="../Content/App.css" />
	<link rel="Stylesheet" type="text/css" href="../Content/dcmegamenu.css" />
	<link rel="Stylesheet" type="text/css" href="../Content/skins/grey.css" />

	<!-- Add your JavaScript to the following file -->
	<script type="text/javascript" src="../Scripts/App.js"></script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
	Page Title
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

	<div>
		<p id="message">
			<!-- The following content will be replaced with the user name when you run the app - see App.js -->
			initializing...
		</p>
	</div>
	
	<div class="wrap">
<h2>jQuery Mega Drop Down Menu Plugin v 1.3.3 - <a href="http://www.designchemical.com/lab/jquery-mega-drop-down-menu-plugin/getting-started/">Visit Plugin Site</a></h2>
<div class="demo-container">
<h3>Basic Styling, Items Per Row: 3, Speed: Fast, Effect: Fade In, Event: Click, Full Width: True</h3> 
<ul id="mega-menu-1" class="mega-menu">
	<li><a href="test.html">Home</a></li>
	<li><a href="test.html">Products</a>
		<ul>
			<li><a href="#">Mobile Phones &#038; Accessories</a>
				<ul>
					<li><a href="#">Product 1</a></li>
					<li><a href="#">Product 2</a></li>
					<li><a href="#">Product 3</a></li>
				</ul>
			</li>
			<li><a href="#">Desktop</a>
			    <ul>
					<li><a href="#">Product 4</a></li>
					<li><a href="#">Product 5</a></li>
					<li><a href="#">Product 6</a></li>
					<li><a href="#">Product 7</a></li>
					<li><a href="#">Product 8</a></li>
					<li><a href="#">Product 9</a></li>
				</ul>
			</li>
			<li><a href="#">Laptop</a>
			    <ul>
					<li><a href="#">Product 10</a></li>
					<li><a href="#">Product 11</a></li>
					<li><a href="#">Product 12</a></li>
					<li><a href="#">Product 13</a></li>
				</ul>
			</li>
			<li><a href="#">Accessories</a>
			    <ul>
					<li><a href="#">Product 14</a></li>
					<li><a href="#">Product 15</a></li>
				</ul>
			</li>
			<li><a href="#">Software</a>
			  <ul>
				<li><a href="#">Product 16</a></li>
					<li><a href="#">Product 17</a></li>
					<li><a href="#">Product 18</a></li>
					<li><a href="#">Product 19</a></li>
			  </ul>
			</li>
		</ul>
	</li>
	<li><a href="#">Sale</a>
		<ul>
			<li><a href="#">Special Offers</a>
	<ul>
		<li><a href="#">Offer 1</a></li>
		<li><a href="#">Offer 2</a></li>
		<li><a href="#">Offer 3</a></li>
	</ul>
	</li>
	<li><a href="#">Reduced Price</a>
	<ul>
		<li><a href="#">Offer 4</a></li>
		<li><a href="#">Offer 5</a></li>
		<li><a href="#">Offer 6</a></li>
		<li><a href="#">Offer 7</a></li>
	</ul>
</li>
	<li><a href="#">Clearance Items</a>
	<ul>
		<li><a href="#">Offer 9</a></li>

	</ul>
</li>
	<li class="menu-item-129"><a href="#">Ex-Stock</a>
	<ul>
		<li><a href="#">Offer 10</a></li>
		<li><a href="#">Offer 11</a></li>
		<li><a href="#">Offer 12</a></li>
		<li><a href="#">Offer 13</a></li>
	</ul>
</li>
</ul>
</li>
<li><a href="#">About Us</a>
<ul>
	<li><a href="#">About Page 1</a></li>
	<li><a href="#">About Page 2</a></li>

</ul>
</li>
<li><a href="#">Services</a>
<ul>
	<li><a href="#">Service 1</a>
	<ul>
		<li><a href="#">Service Detail A</a></li>
		<li><a href="#">Service Detail B</a></li>
	</ul>
</li>
<li><a href="#">Service 2</a>
	<ul>
		<li><a href="#">Service Detail C</a></li>
	</ul>
</li>
	<li><a href="#">Service 3</a>
	<ul>
		<li><a href="#">Service Detail D</a></li>
		<li><a href="#">Service Detail E</a></li>
		<li><a href="#">Service Detail F</a></li>
	</ul>
</li>
	<li><a href="#">Service 4</a></li>
</ul>
</li>
<li><a href="#">Contact us</a></li>
</ul>
</div>
</div>

</asp:Content>