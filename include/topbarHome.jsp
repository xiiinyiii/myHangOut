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
<script type="text/javascript" src="javascript/jquery/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="javascript/jquery/bootstrap.min.js"></script>
</head>
<body>
<!-- Navigation Bar -->
<nav class="navbar navbar-custom navbar-static-top">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="home.jsp">myHangout</a>
  </div>
  <div class="collapse navbar-collapse">
    <ul class="nav navbar-nav navbar-right">
      <li><a href="home.jsp"><i class="glyphicon glyphicon-refresh icon-white"></i> Refresh</a></li>
      <li class="dropdown">
        <a href="#" class="glyphicon glyphicon-filter icon-white" data-toggle="dropdown"> Filter <b class="caret"></b></a>
        <ul class="dropdown-menu pull-right">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </li>
      <li><a href="setting.jsp"><i class="glyphicon glyphicon-cog icon-white"></i> Setting</a></li>
    </ul>
  </div><!-- /.navbar-collapse -->
</nav>
<!-- Navigation Ends -->
</body>
</html>