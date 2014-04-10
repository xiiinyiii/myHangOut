<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>myHangout</title>
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
	sessionStorage.setItem("0","home,25");
	return true;
}
function loadProfile(){
	sessionStorage.setItem("0","profile,25,Stanley");
	return true;
}
</script>
</head>
<body>
<!-- Navigation Bar -->
<nav class="navbar navbar-custom navbar-static-top">
  <div class="navbar-header">
    <a class="navbar-brand" href="#">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</a>   
    <ul class="nav navbar-nav navbar-right">   
      <li><!--<a href="home.jsp"><img src="" id="socialIcon" width="25px" height="27px"></a>-->
      <a class="navbar-brand" href="home.jsp">&nbsp&nbspEzSearch</a></li>
    </ul>
  </div>
</nav>
<!-- Navigation Ends -->
</body>
</html>