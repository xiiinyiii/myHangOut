<%@include file="include/topbar.jsp"%>
<%@include file="include/bottombarProfile.jsp"%>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Profile</title>
    <link rel="stylesheet" href="css/map.css" />
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    <script type="text/javascript" src="javascript/map/initialize.js"></script>
    <script type="text/javascript" src="javascript/profile/mymarkers.js"></script>
    <style type="text/css">
	#shelf2{position:fixed; top:100px; left:80px; height:100px;width:100px;padding:0 10px 0;z-index:1;}
	</style>
  </head>
  <body>
    <div id="map-canvas"></div>
    <div id='shelf2' align="left">
    <img src="images/friends/boy/face9.jpg">
    </div>
  </body>
</html>