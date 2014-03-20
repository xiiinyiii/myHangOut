<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Notifications</title>
  </head>
  <body><br><br><br><br>
 	<div class="container">
<div class="bs-example">
    <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#status">Status</a></li>
        <li><a data-toggle="tab" href="#photos">Photos</a></li>
        <li><a data-toggle="tab" href="#events">Events</a></li>
	    </ul>
	    <div class="tab-content">
	        <div id="status" class="tab-pane fade in active">
	            <p>
				<div class="row clearfix">
				<div class="col-md-2 column">
					<br/>
					<center><img src="images/friends/boy/face3.jpg" width="100" height="100"></td></center>
					<br/>
					</div>
					<div class="col-md-10 column">
					<dl>
					<dt>
						Enter your status here...
					<textarea class="form-control" rows="4"></textarea>
					</dt>
					<div class="col-md-20 column">
			 		<p align = "right"><img src="http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Marker-Outside-Pink-icon.png" width="20" height="20"><button type="button" class="btn btn-link">Marina Bay Sands</button></p>
					</div>
					<p align = "right"><button type="button" class="btn btn-primary"><strong>POST</strong></button>
					<button type="button" class="btn btn-primary"><strong>CANCEL</strong></button></p>
					</dl>
					</div>
					</div>
					</p>
	        </div>
	        <div id="photos" class="tab-pane fade">
	            	<p>
					<div class="row clearfix">
					<div class="col-md-2 column">
					<br/>
					<center><img src="images/addphoto.png" width="200" height="200"></td></center>
					<br/>
					</div>
					<div class="col-md-10 column">
					<dl>
					<dt>
					<textarea class="form-control" rows="4"></textarea>
					</dt>
					<div class="col-md-20 column">
			 		<p align = "right"><img src="http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Marker-Outside-Pink-icon.png" width="20" height="20"><button type="button" class="btn btn-link">Marina Bay Sands</button></p>
					</div>
					<p align = "right"><button type="button" class="btn btn-primary"><strong>POST</strong></button>
					<button type="button" class="btn btn-primary"><strong>CANCEL</strong></button></p>
					</dl>
					</div>
					</div><br><br>
					</p>
	        </div>
	        <div id="events" class="tab-pane fade">
	            <p><div class="row clearfix">
			<div class="col-md-12 column">
				<form class="form-horizontal" role="form">
					<div class="form-group">
						 <label for="inputEventName" class="col-sm-2 control-label">Event Name</label>
						<div class="col-sm-10">
							<input type="text" class="input-xlarge" id="inputEventName"  />
						</div>
					</div>
					
					<div class="form-group">
						 <label for="inputDesc" class="col-sm-2 control-label">Descriptions</label>
						<div class="col-sm-10">
							<textarea class="input-xlarge" rows="4"></textarea>
						</div>
					</div>
					
					<div class="form-group">
						 <label for="inputLocation" class="col-sm-2 control-label">Location</label>
						<div class="col-sm-10">
							<input type="text" class="input-xlarge" id="inputLocation" />
						</div>
					</div>
					
					<div class="form-group">
						 <label for="inputDate" class="col-sm-2 control-label">Date</label>
						<div class="col-sm-10">
							<input type="text" class="input-xlarge" id="inputDate" />
							
						</div>
					</div>
					
					<div class="form-group">
						 <label for="inputstarttime" class="col-sm-2 control-label">Start Time</label>
						<div class="col-sm-10">
							<input type="text" class="input-xlarge" id="inputstarttime" />
						</div>
					</div>
					
						<div class="form-group">
						 <label for="inputendtime" class="col-sm-2 control-label">End Time</label>
						<div class="col-sm-10">
							<input type="text" class="input-xlarge" id="inputendtime" />
						</div>
					</div>
					
					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							 <p align = "right"><button type="button" class="btn btn-primary"><strong>POST</strong></button>
						<button type="button" class="btn btn-primary"><strong>CANCEL</strong></button></p>
						</div>
					</div>
				</form><br><br>
			</div></p>
		        </div>
	    </div>
	</div>
	</div>
  </body>
</html>