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
function changeHome(){
	var sessionDetails = sessionStorage.getItem("0");
	var sessionDetailsSplit = sessionDetails.split(",");
	//sessionStorage.setItem("0",sessionDetailsSplit[0]+",home,"+sessionDetailsSplit[2]);
	sessionStorage.setItem("0","home,"+sessionDetailsSplit[1]);
	return true;
}
function changeProfile(){
	var currentSession = sessionStorage.getItem("0");
	var currentSessionSplit = currentSession.split(",");
	//var newStatus = currentSessionSplit[0]+",profile,"+currentSessionSplit[2]+",Stanley";
	sessionStorage.setItem("0","profile,"+currentSessionSplit[1]+",Stanley");
	return true;
}
</script>
</head>
<body>
<div id="footer">
	<table><tr>
	<td style="padding:2px" width="80px" align="center"><a href="home.jsp" onclick="return changeHome();"><img src="images/bottomicon/home.png" width="30px" height="30px"></a></td>
	<td style="padding:2px" width="80px" align="center" bgcolor="#3366CC"><a href="myfriends.jsp"><img src="images/bottomicon/friends.png" width="30px" height="30px"></a></td>
	<td style="padding:2px" width="80px" align="center"><a href="profile.jsp" onclick="return changeProfile()"><img src="images/bottomicon/profile.png" width="30px" height="30px"></a></td>
	<td style="padding:2px" width="80px" align="center"><a href="setting.jsp"><img src="images/bottomicon/setting.png" width="30px" height="30px"></a></td>
	<td style="padding:2px" width="80px" align="center"><a href="help.jsp"><img src="images/bottomicon/help.png" width="30px" height="30px"></a></td>
	<!--
	</tr>
	<tr><td align="center"><font color="#ffffff">Home</font></td><td align="center" bgcolor="#3366CC"><font color="#ffffff">Friends</font></td>
	<td align="center"><font color="#ffffff">Profile</font></td>
	<td align="center"><font color="#ffffff">Setting</font></td>
	<td align="center"><font color="#ffffff">Help</font></td></tr>-->
	</table>
</div>
</body>
</html>