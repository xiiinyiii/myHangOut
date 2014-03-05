<%@include file="include/topbar.jsp"%>
<%@include file="include/bottombar.jsp"%>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Setting</title>
  </head>
 <body>
    <div class="container"><div class="row span6 center">
    	<strong>Settings: </strong><hr>
    	<div class="control-group">
			<div class="controls">
				<label class="control-label" for="changeUsername">Change username:</label>
				<input type="text" class="input-xlarge" name="changeUsername" id="changeUsername" value="">
			</div>
		</div><br><br>
		<div class="control-group">
			<div class="controls">
				<label class="control-label" for="changePassword">Change Password:</label>
				<input type="text" class="input-xlarge" name="changePassword" id="changePassword" value="">
			</div>
		</div><br><br>
		<div class="control-group">
			  <div class="controls">
			    <label class="control-label" for="numOfPost">Number of posts to display :</label>
				<select class="input-small" name="wgtUnit" id="wgtUnit">
					<option name="1" value="1" selected>1</option>
					<option name="2" value="2">2</option>
					<option name="3" value="3">3</option>
					<option name="4" value="4">4</option>
					<option name="5" value="5">5</option>
					<option name="10" value="10">10</option>
					<option name="15" value="15">15</option>
					<option name="20" value="20">20</option>
				</select>
			  </div>
			</div><br><br>
		<div class="form-actions">
				<button type="button" class= "btn btn-primary">Help</button>
			</div>
    </div></div>
  </body>
</html>