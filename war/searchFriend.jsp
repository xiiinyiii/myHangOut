<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<% 
	String search = request.getParameter("friendName");
	//System.out.println(search);
	//response.sendRedirect("myfriends.jsp");
%>
	<jsp:forward page="myfriends.jsp">
 	 <jsp:param name="searchName" value="<%=search%>"></jsp:param>
	</jsp:forward>
</body>
</html>