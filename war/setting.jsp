<%@include file="include/topbar.jsp"%>
<%@include file="include/bottombarSetting.jsp"%>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Setting</title>
    <script>
    function updateNumPost(){
    	var numOfPosts = document.getElementById('numOfPost');
		var selectedNumOfPost = numOfPosts.options[numOfPosts.selectedIndex].value;
		var sessionDetails = sessionStorage.getItem("0");
		var sessionDetailsSplit = sessionDetails.split(",");
		var homeSession = "home,"+selectedNumOfPost
		sessionStorage.setItem("0", homeSession);
		window.location="home.jsp";
    }
    window.onload=function(){
    	var currentPostNum = sessionStorage.getItem("0");
    	var currentPostNumSplit = currentPostNum.split(",");
    	var dropdownOption = 0;
    	if(currentPostNumSplit[1]=="1"){
    		dropdownOption=0;
    	}else if(currentPostNumSplit[1]=="2"){
    		dropdownOption=1;
    	}else if(currentPostNumSplit[1]=="3"){
    		dropdownOption=2;
    	}else if(currentPostNumSplit[1]=="4"){
    		dropdownOption=3;
    	}else if(currentPostNumSplit[1]=="5"){
    		dropdownOption=4;
    	}else if(currentPostNumSplit[1]=="10"){
    		dropdownOption=5;
    	}else if(currentPostNumSplit[1]=="15"){
    		dropdownOption=6;
    	}else if(currentPostNumSplit[1]=="20"){
    		dropdownOption=7;
    	}else if(currentPostNumSplit[1]=="25"){
    		dropdownOption=8;
    	}else if(currentPostNumSplit[1]=="30"){
    		dropdownOption=9;
    	}
    	document.getElementById('numOfPost').selectedIndex = dropdownOption;
    };
    function loadProfile(){
    	var sessionDetails = sessionStorage.getItem("0");
		var sessionDetailsSplit = sessionDetails.split(",");
		//var homeSession = sessionDetailsSplit[0]+",profile,"+sessionDetailsSplit[2]+",Stanley";
		sessionStorage.setItem("0", "profile,"+sessionDetailsSplit[1]+",Stanley");
		window.location="profile.jsp";
    }
    </script>
  </head>
 <body>
    <div class="container">
		<div class="control-group">
			  <div class="controls">
			    <label class="control-label" for="numOfPost">Number of posts to display :</label>
				<select class="input-small" name="numOfPost" id="numOfPost" onChange="updateNumPost();">
					<option name="1" value="1">1</option>
					<option name="2" value="2">2</option>
					<option name="3" value="3">3</option>
					<option name="4" value="4">4</option>
					<option name="5" value="5">5</option>
					<option name="10" value="10">10</option>
					<option name="15" value="15">15</option>
					<option name="20" value="20">20</option>
					<option name="25" value="25">25</option>
					<option name="30" value="30">30</option>
				</select>
			  </div>
			</div><br><br>
			
			<div class="table-responsive">
		    <table class="table">
		        <tbody>
		            <!--<tr>
		                <td colspan="2" align="center">
						  <img src="images/setting/profile.png" onclick="loadProfile()" width="80px" height="80px"><br>
						  <font size="5px">Profile</font>
						  </td>
		               <!--<td align="center">
						  <a href="help.jsp"><img src="images/setting/help.png" onclick="" width="80px" height="80px"></a><br>
						  <font size="5px">Help</font>
						  </td>
		            </tr>-->
		            <tr>
		                <td align="center">
						  <img src="images/setting/block.png" width="80px" height="80px"><br>
						  <font size="5px">Block</font><br>
						  <font size="5px">Friend</font>
						  </td>
		                <td align="center">
						  <img src="images/setting/logout.png" width="80px" height="80px"><br>
						  <font size="5px">Logout</font>
						  </td>
		            </tr>
		        </tbody>
		    </table>
		</div>
    </div>
  </body>
</html>
