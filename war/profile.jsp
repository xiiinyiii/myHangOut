<%@include file="include/topbarHome.jsp"%>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Profile</title>
    <link rel="stylesheet" href="css/map.css" />
    <link rel="stylesheet" href="css/infowindow.css" />
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    <script type="text/javascript" src="javascript/profile/mymarkers.js"></script>
    <script type="text/javascript" src="javascript/profile/loadprofile.js"></script>
    <script type="text/javascript" src="javascript/profile/filterProfile.js"></script>
    <style type="text/css">
	#shelf2{position:fixed; top:100px; left:20px; height:100px;width:100px;padding:0 10px 0;z-index:1;}
	</style>
  </head>
  <body>
    <div id="map-canvas"></div>
    <div id='shelf2' align="left">
    <img src="" id="profileAvatar" height="70px" width="70px">
    </div>
    <!-- Events Details pop up -->
    <div class="modal" id="eventDetails">
	<div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 class="modal-title">Event Details:</h4>
        </div>
        <div class="modal-body">
        	<form class="form-horizontal" role="form">
			<div class="form-group">
				 <label for="eventName" class="col-sm-3 control-label">Event Name:</label>
				<div class="col-sm-9"><div class="controls readonly">
					<span id="eventName"></span>
				</div></div>
			</div>
			<div class="form-group">
				 <label for="eventDescription" class="col-sm-3 control-label">Description:</label>
				<div class="col-sm-9"><div class="controls readonly">
					<span id="eventDescription"></span>
				</div></div>
			</div>
			<div class="form-group">
				 <label for="eventTime" class="col-sm-3 control-label">Time:</label>
				<div class="col-sm-9"><div class="controls readonly">
					<span id="eventTime"></span>
				</div></div>
			</div>
			<div class="form-group">
				 <label for="eventDate" class="col-sm-3 control-label">Date:</label>
				<div class="col-sm-9"><div class="controls readonly">
					<span id="eventDate"></span>
				</div></div>
			</div>
			<div class="form-group">
				 <label for="eventLocation" class="col-sm-3 control-label">Location:</label>
				<div class="col-sm-9"><div class="controls readonly">
					<span id="eventLocation"></span>
				</div></div>
			</div>
			<div class="form-group">
				 <label for="eventParticipants" class="col-sm-3 control-label">Participants:</label>
				<div class="col-sm-6"><div class="controls readonly">
					<span id="eventParticipants"></span>
				</div></div>
			</div>
		</form>
			
        </div>
        <div class="modal-footer">
          <a href="#" data-dismiss="modal" class="btn btn-primary">Join</a>
          <a href="#" data-dismiss="modal" class="btn">Decline</a>
        </div>
  	   </div>
	</div>
	</div>
	
		<!-- FilterForm -->
<div class="modal" id="myModal">
	<div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 class="modal-title">Filter Options:</h4>
        </div>
        
        <div class="modal-body">
          <ul class="nav nav-tabs">
	        <li id="statusTab" class="active"><a data-toggle="tab" href="#status">Status</a></li>
	        <li id="photoTab" class=""><a data-toggle="tab" href="#photo">Photo</a></li>
	        <li id="eventTab" class=""><a data-toggle="tab" href="#event">Event</a></li>
	      </ul>
	      <div id='content' class="tab-content"><br>
	      <!-- This tab for status -->
      		<div class="tab-pane active" id="status">
	        	<div class="control-group">
				  <label class="control-label" for="statusPeriod">Period:</label>
				  <div class="controls">
					<select class="input-small" name="statusMonth" id="statusMonth">
						<option name="any" value="any" selected>Any</option>
						<option name="1" value="01">Jan</option>
						<option name="2" value="02">Feb</option>
						<option name="3" value="03">Mar</option>
						<option name="4" value="04">Apr</option>
						<option name="5" value="05">May</option>
						<option name="6" value="06">Jun</option>
						<option name="7" value="07">Jul</option>
						<option name="8" value="08">Aug</option>
						<option name="9" value="09">Sep</option>
						<option name="10" value="10">Oct</option>
						<option name="11" value="11">Nov</option>
						<option name="12" value="12">Dec</option>
					</select>&nbspMonth
					<select class="input-small" name="statusYear" id="statusYear">
						<option name="any" value="any" selected>Any</option>
						<option name="2013" value="2013">2013</option>
						<option name="2014" value="2014">2014</option>
					</select>&nbspYear
				  </div>
				</div><br>
				<div class="control-group">
				  <label class="control-label" for="statusLocation">Location:</label>
				  <div class="controls">
					<select class="input-small" name="statusRegion" id="statusRegion">
					<option name="any" value="any" selected>Any</option>
					<option name="north" value="north">North</option>
					<option name="south" value="south">South</option>
					<option name="east" value="east">East</option>
					<option name="west" value="west">West</option>
					</select>
				  </div>
				</div>
      		</div>
     	 <div class="tab-pane" id="photo"><br>
     	 <!-- This tab for photos -->
	        <div class="control-group">
				  <label class="control-label" for="photoPeriod">Period:</label>
				  <div class="controls">
					<select class="input-small" name="photoMonth" id="photoMonth">
						<option name="any" value="any" selected>Any</option>
						<option name="1" value="01">Jan</option>
						<option name="2" value="02">Feb</option>
						<option name="3" value="03">Mar</option>
						<option name="4" value="04">Apr</option>
						<option name="5" value="05">May</option>
						<option name="6" value="06">Jun</option>
						<option name="7" value="07">Jul</option>
						<option name="8" value="08">Aug</option>
						<option name="9" value="09">Sep</option>
						<option name="10" value="10">Oct</option>
						<option name="11" value="11">Nov</option>
						<option name="12" value="12">Dec</option>
					</select>&nbspMonth
					<select class="input-small" name="photoYear" id="photoYear">
						<option name="any" value="any" selected>Any</option>
						<option name="2013" value="2013">2013</option>
						<option name="2014" value="2014">2014</option>
					</select>&nbspYear
				  </div>
				</div><br>
				<div class="control-group">
				  <label class="control-label" for="photoLocation">Location:</label>
				  <div class="controls">
					<select class="input-small" name="photoRegion" id="photoRegion">
					<option name="any" value="any" selected>Any</option>
					<option name="north" value="north">North</option>
					<option name="south" value="south">South</option>
					<option name="east" value="east">East</option>
					<option name="west" value="west">West</option>
					</select>
				  </div>
				</div>
		</div>
      	<div class="tab-pane" id="event"><br>
	       <!-- This tab for events -->
	        <div class="control-group">
			  <label class="control-label" for="eventPeriod">Period:</label>
			  <div class="controls">
				<select class="input-small" name="eventMonth" id="eventMonth">
					<option name="any" value="any" selected>Any</option>
					<option name="1" value="01">Jan</option>
					<option name="2" value="02">Feb</option>
					<option name="3" value="03">Mar</option>
					<option name="4" value="04">Apr</option>
					<option name="5" value="05">May</option>
					<option name="6" value="06">Jun</option>
					<option name="7" value="07">Jul</option>
					<option name="8" value="08">Aug</option>
					<option name="9" value="09">Sep</option>
					<option name="10" value="10">Oct</option>
					<option name="11" value="11">Nov</option>
					<option name="12" value="12">Dec</option>
				</select>&nbspMonth
				<select class="input-small" name="eventYear" id="eventYear">
					<option name="any" value="any" selected>Any</option>
					<option name="2013" value="2013">2013</option>
					<option name="2014" value="2014">2014</option>
				</select>&nbspYear
			  </div>
			</div><br>
			<div class="control-group">
			  <label class="control-label" for="eventRegion">Region:</label>
			  <div class="controls">
			  	<select class="input-small" name="eventRegion" id="eventRegion">
					<option name="any" value="any" selected>Any</option>
					<option name="north" value="north">North</option>
					<option name="south" value="south">South</option>
					<option name="east" value="east">East</option>
					<option name="west" value="west">West</option>
				</select>
			  </div>
			</div><br>
			<div class="control-group">
			  <label class="control-label" for="eventNameFilter">Event Name:</label>
			  <div class="controls">
				<input type="text" class="input-xlarge" name="eventNameFilter" id="eventNameFilter" maxlength="70">
			  </div>
			</div>
      	</div>
      </div> 
	      
        </div>
        
        <div class="modal-footer">
          <button onclick="filterProfile()" class="btn btn-primary">Submit</button>
          <a href="#" data-dismiss="modal" class="btn">Cancel</a>
        </div>
      </div>
    </div>
</div>
  </body>
</html>