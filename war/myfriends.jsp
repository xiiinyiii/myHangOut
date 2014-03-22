<%@ page import="java.util.*" %>
<%@include file="include/topbar.jsp"%>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <!--Bootstrap-->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" media="screen">
    <title>My friends</title>
    <style>
      .col-xs-6{
        height: 80px;
        background-color: #F0F0F0;
        text-align: center;
      }
      .col-xs-12{
        height: 100px;
        background-color: #C0C0C0;
        text-align: left;
      }
    </style>
    <script>
    function saveName(name){
    	var currentSession = sessionStorage.getItem("0");
    	var currentSessionSplit = currentSession.split(",");
    	var newStatus = currentSessionSplit[0]+",profile,"+currentSessionSplit[2]+","+name;
    	sessionStorage.setItem("0",newStatus);
    	window.location="profile.jsp";
    }
    </script>
  </head>
  <body><br><br><br>

  <%
  ArrayList<String> friendList = new ArrayList<String>();
  ArrayList<String> tempList = new ArrayList<String>();
  String name1 = request.getParameter("searchName");
  if(name1==null){
	  name1="";
  }
  

  //friendList.add("Joseph,boy/face1.jpg");
  friendList.add("Johnny,boy/face2.jpg");
  //friendList.add("Stanley,boy/face3.jpg");
  //friendList.add("Murphy,boy/face4.jpg");
  friendList.add("Billy,boy/face5.jpg");
  //friendList.add("Wilson,boy/face7.jpg");
  friendList.add("Alvin,boy/face8.jpg");
  friendList.add("Dave,boy/face9.jpg");
  //friendList.add("Stephen,boy/face10.jpg");
  //friendList.add("Amanda,girl/face11.jpg");
  //friendList.add("Bernice,girl/face12.jpg");
  friendList.add("Charlotte,girl/face13.jpg");
  //friendList.add("Delia,girl/face14.jpg");
  friendList.add("Rebecca,girl/face15.jpg");
  friendList.add("Renee,girl/face16.jpg");
  friendList.add("Stella,girl/face17.jpg");
 // friendList.add("Victoria,girl/face18.jpg");
  
  if(name1.length()>0){
	  for(int i = 0; i<friendList.size();i++){ 
      	String[] friendsDetails = friendList.get(i).split(",");
      	if (name1.toLowerCase().contains(friendsDetails[0].toLowerCase())){
      		tempList.add(friendList.get(i));	
      	}
      }
	  if(tempList.isEmpty()){
  		  %><span class="label label-danger">User could not be found.</span><%
  	  }else{
  		  friendList.clear();
  		  friendList = tempList;
  	  }
  }
  
  %>
  
  <!-- Grid Classes .container:wrapper for all rows
              .row: contains all column classes
              .col-##-##:the sizes of the columns in your row -->
    <div class="container">
      <div class="row"><!--search-->
        <div class="col-xs-12">
        	<h4>Search for Friends</h4>
			<form name="search" action="searchFriend.jsp" method="post">
			<input type="text" name="friendName" class="input-medium" placeholder="Search Friend">
			<input type="submit" value="Search" class="btn btn-primary">
			</form>       	
        </div>
      </div>
      <div class="row"><!--friends-->
        <!--do for loop on the friends-->
        <%for(int i = 0; i<friendList.size();i++){ 
        	String[] friendsDetails = friendList.get(i).split(",");
        	String avatar = "images/friends/"+friendsDetails[1];
        	//String[] friendsDetails2 = friendList.get(i+1).split(",");%>
        <div class="col-xs-6">
          <table border="1" class="table table-bordered table-condensed">
            <tr>
              <td><img src=<%=avatar %> onclick="saveName('<%=friendsDetails[0]%>')" alt="friends name" width="50" height="50"></td>
              <td width="60%"><%=friendsDetails[0] %><br/>
              </td>
            </tr>
          </table>
        </div>
        <%} %>
        <!--  
        <div class="col-xs-4">
          <table border="1">
            <tr>
              <td><img src="images/friends/boy/face9.jpg" alt="friends name" width="50" height="50"></td>
              <td>Stanley Tan<br/>
                <a href="unfollowfriend.jsp">Unfriend</a>
              </td>
            </tr>
          </table>
        </div>
        -->
      </div><br><br>
  	 </div><!-- End of container -->
  </body>
</html>