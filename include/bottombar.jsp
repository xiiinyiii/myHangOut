<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>myHangout</title>
<!-- StyleSheet -->
<style type="text/css">
#shelf{position:fixed; top:640px; left:500px; height:70px;width:260px;background:black;padding:0 10px 0;opacity:0.8;z-index:1;}
</style>
</head>
<body>
<div id='shelf' align="left">
    <table><tr>
	<td><a href="home.jsp" onclick="return changeHome();"><img src="images/bottomicon/home-grey.png" width="50px" height="60px"></a></td>
	<td><a href="myfriends.jsp" onclick="return changeFriends();"><img src="images/bottomicon/friends-blue.png" width="50px" height="60px"></a></td>
	<td><a href="home.jsp" onclick="return changeHome();"><img src="images/bottomicon/create-blue.png" width="50px" height="60px"></a></td>
	<td><a href="home.jsp" onclick="return changeHome();"><img src="images/bottomicon/news-blue.png" width="50px" height="60px"></a></td>
	<td><a href="profile.jsp" onclick="return changeProfile();"><img src="images/bottomicon/profile-blue.png" width="50px" height="60px"></a></td>
	</tr></table>
	</div>
</body>
</html>