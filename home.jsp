<%@include file="include/topbarHome.jsp"%>
<%@include file="include/bottombar.jsp"%>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Home</title>
    <link rel="stylesheet" href="css/map.css" />
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    <script type="text/javascript" src="javascript/map/initialize.js"></script>
    <script type="text/javascript" src="javascript/map/markers.js"></script>

  </head>
  <body>
    <div id="map-canvas"></div>
    <div id="eventDetails" class="modal hide fade in" style="display: none;">  
	<div class="modal-body">
		<legend>Event Details</legend>
		<div class="control-group">
			<label class="control-label" for="eventName">Event Name:</label>
			<div class="controls">
				Go & Eat
			</div>
		</div>
		<div class="control-group">
			<label class="control-label" for="eventName">Event Name:</label>
			<div class="controls">
				Go & Eat
			</div>
		</div>
		<div class="control-group">
			<label class="control-label" for="eventTime">Event Time:</label>
			<div class="controls">
				14:00 - 16:00
			</div>
		</div>
		<div class="control-group">
			<label class="control-label" for="eventDate">Event Date:</label>
			<div class="controls">
				14th February 2014
			</div>
		</div>
		<div class="control-group">
			<label class="control-label" for="eventLocation">Event Location:</label>
			<div class="controls">
				Jurong east
			</div>
		</div>
		<div class="control-group">
			<label class="control-label" for="eventParticipant">List of Parcipant:</label>
			<div class="controls">
				Stanley
				Abby
			</div>
		</div>				
		<div class="form-actions">
			<button type="submit" class= "btn btn-primary btn-large">Submit</button>
		</div>        
	</div>
	</div>
  </body>
</html>