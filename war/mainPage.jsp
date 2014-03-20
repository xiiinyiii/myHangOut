<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <!--Bootstrap-->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" media="screen">
<title>EzSearch</title>
<script>
function confirmFacebook(){
	sessionStorage.clear();
	confirm('Facebook would like to access your contacts, profile and friendlists.');
	sessionStorage.setItem("0","facebook,");
	return true;
}
function confirmTwitter(){
	sessionStorage.clear();
	confirm('Twitter would like to access your contacts, profile and friendlists.');
	sessionStorage.setItem("0","twitter,");
	return true;
}
function confirmInstagram(){
	sessionStorage.clear();
	confirm('Instagram would like to access your contacts, profile and friendlists.');
	sessionStorage.setItem("0","instagram,");
	return true;
}
</script>
</head>
<body>
<center>
<br/><br/><br/><br/><br/>
<img src="images/main/EzSearchLogo1.png" width="100%" height="auto"/>
<br/><br/>
<br/>
<p>
<a href="home.jsp" onClick="return confirmFacebook()"><img src="images/main/FacebookLabel.png" width="100%" height="auto"></a>
</p>
<br/>
<p>
<a href="home.jsp" onClick="return confirmInstagram()"><img src="images/main/InstagramLabel.png" width="100%" height="auto"></a>
</p>
<br/>
<p>
<a href="home.jsp" onClick="return confirmTwitter()"><img src="images/main/TwitterLabel.png" width="100%" height="auto"></a>
</p>
</center>
</body>
</html>