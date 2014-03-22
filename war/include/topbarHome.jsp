<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>EzSearch</title>
<!-- StyleSheet -->
<link rel="stylesheet" href="css/bootstrap-responsive.min.css" />
<link rel="stylesheet" href="css/bootstrap.css" />
<link rel="stylesheet" href="css/navigation.css" />
<link rel="stylesheet" href="css/footer.css" />
<script type="text/javascript" src="javascript/jquery/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="javascript/jquery/bootstrap.min.js"></script>
<script>
function refreshSession(){
	var sessionDetails = sessionStorage.getItem("0");
	var sessionDetailsSplit = sessionDetails.split(",");
	sessionStorage.setItem("0",sessionDetailsSplit[0]+",home,"+sessionDetailsSplit[2]);
	return true;
}
document.ready=function(){
	var sessionDetails = sessionStorage.getItem("0");
	var sessionDetailsSplit = sessionDetails.split(",");
	if(sessionDetailsSplit[0]=="twitter"){
		document.getElementById("socialIcon").src = "images/socialmedia/twitter.png";
	}else if(sessionDetailsSplit[0]=="instagram"){
		document.getElementById("socialIcon").src = "images/socialmedia/instagram.png";
	}else{
		document.getElementById("socialIcon").src = "images/socialmedia/facebook.png";
	}
}
</script>
</head>
<body>
<div id="footer">
	 <a href="home.jsp"><img class="navbar-brand"  src="" id="socialIcon" width="55px" height="100px"></a>
     <a class="navbar-brand" href="home.jsp" onclick="return refreshSession()"><i class="glyphicon glyphicon-home icon-white"></i> </a>
     <a class="navbar-brand" href="myfriends.jsp"><i class="glyphicon glyphicon-user icon-white"><i class="glyphicon glyphicon-user icon-white"></i></i> </a>
    <a class="navbar-brand" href="#myModal" data-toggle="modal"><i class="glyphicon glyphicon-filter icon-white"></i> </a>
    <a class="navbar-brand" href="setting.jsp"><i class="glyphicon glyphicon-cog icon-white"></i> </a>
     <a class="navbar-brand" href="help.jsp"><i class="glyphicon glyphicon-question-sign icon-white"></i> </a>  
</div>
</body>
</html>