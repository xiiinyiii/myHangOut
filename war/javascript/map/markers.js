var infoWindowStatus = [];
var infoWindowPhoto = [];
var infoWindowEvent = [];
var eventDetailArray = [];
var eventDetailCoord = [];
var recentPost = [];
var recentMarker = [];
var storePhoto=[];
function createMarkers() {	
	//Load top 10 recent post
	recentPost = [];
	recentMarker = [];
	var storePhoto=[];
	
	//Clear any filter remaining
	for(var i=0;i<filteredMarker.length;i++){
		filteredMarker[i].setMap(null);
	}
	filteredMarker=[];
	
	var numOfPost = sessionStorage.getItem(0).split(",");
	
	for(var i = 0; i<numOfPost[1];i++){
		var data = sessionStorage.getItem(i+1);
		var dataSplit = data.split(",");
		recentPost.push(data);

		if(dataSplit[2]=="Status"){
			var statusLat = dataSplit[3];
			var statusLng = dataSplit[4];
			var statusCoord = new google.maps.LatLng(statusLat,statusLng);
			var marker = new google.maps.Marker({
			      position: statusCoord,
			      map: map,
			      animation: google.maps.Animation.DROP,
			      title: 'Status'
			  });
			recentMarker.push(marker);

			//Event listenser 
			infoWindowStatus[i] = "<div id='infoWindow'><strong>"+dataSplit[0]+" said: </strong><hr>"+dataSplit[5]+"<br><br>" +
	  		"<font size='1'><b>Time:</b> "+dataSplit[6]+"<br><b>Date:</b> "+dataSplit[7].substring(0,2)+"/"+dataSplit[7].substring(2,4)+"/"+dataSplit[7].substring(4)+
	  		"<br><b>Address:</b> "+dataSplit[8]+"<br><br>" +
	  		"<img src='images/like.png' height='25px' width='25px'>25 likes</font></div>";
			google.maps.event.addListener(marker, 'click', (function(marker,i){
	            return function(){
	            	if (infowindow) infowindow.close();
	            	infowindow = new google.maps.InfoWindow();
	                infowindow.setContent(infoWindowStatus[i]);
	                infowindow.open(map, marker);
	            }
	        })(marker,i));
		}else if(dataSplit[2]=="Photo"){
			var photoLat = dataSplit[3];
			var photoLng = dataSplit[4];
			var photoCoord = new google.maps.LatLng(photoLat,photoLng);
			var imagePath = "images/photo/"+dataSplit[9];
			
			var image = new Image();
			image.src = imagePath;
			
			storePhoto[i]=imagePath;
			
			var pinIcon = new google.maps.MarkerImage(
			      imagePath,
			      null, 
			      null, 
			      null, 
			      new google.maps.Size(50, 50)
			  );
			
			var photo = new google.maps.Marker({
			      position: photoCoord,
			      map: map,
			      animation: google.maps.Animation.DROP,
			      title: 'Photo',
			      icon: pinIcon
			  });
			recentMarker.push(photo);
			
			//Event listener
			infoWindowPhoto[i] = "<div id='infoWindow'><strong>"+ dataSplit[0] +"</strong><hr>"+
			"<img src='" + storePhoto[i] + "' height='100' width='100'><br><br>"+
			dataSplit[5]+"<br><br>"+
			  "<font size='1'><b>Time:</b> "+dataSplit[6]+"<br><b>Date:</b> "+dataSplit[7].substring(0,2)+"/"+dataSplit[7].substring(2,4)+"/"+dataSplit[7].substring(4)+
			  "<br><b>Address:</b> "+dataSplit[8]+"<br><br>" +
			  	"<img src='images/like.png' height='25px' width='25px'>17 likes</font></div>";
			google.maps.event.addListener(photo, 'click', (function(photo,i){
	            return function(){
	            	if (infowindow) infowindow.close();

	            	infowindow = new google.maps.InfoWindow();
	                infowindow.setContent(infoWindowPhoto[i]);

	                infowindow.open(map, photo);
	            }
	        })(photo,i));
		}else if(dataSplit[2]=="Events"){
			var eventLat = dataSplit[3];
			var eventLng = dataSplit[4];
			
			var eventCoord = new google.maps.LatLng(eventLat,eventLng);
			var event = new google.maps.Marker({
		      position: eventCoord,
		      map: map,
		      animation: google.maps.Animation.DROP,
		      title: 'Event',
		      icon: 'images/calendar.png'
		  });
			recentMarker.push(event);

			//Event listener
			var eventsMoreDetails = dataSplit[5].split("/");
			eventDetailArray[i]=dataSplit[5];
			eventDetailCoord[i]=eventCoord;
			
			infoWindowEvent[i] = "<div id='infoWindow'><strong>"+ eventsMoreDetails[0] +"</strong><hr>Created By: "+ dataSplit[0] +"<br><br>"+
			"<input type='hidden' id='sendLoadEvent' value="+i+">"+  
			"<div align='right'><font size='1'> More<br>information </font></div>" +
					"<img src='images/right_arrow.png' onclick='loadEvent()' align='right' height='20' width='20'><br><br>"+
			  "<font size='1'><b>Time:</b> "+dataSplit[6]+"<br><b>Date:</b> "+dataSplit[7].substring(0,2)+"/"+dataSplit[7].substring(2,4)+"/"+dataSplit[7].substring(4)+
			  "<br><b>Address:</b></br> "+dataSplit[8]+"<br><br>" +
			  		"<img src='images/like.png' height='25px' width='25px'>38 likes</font></div>";
			
			google.maps.event.addListener(event, 'click', (function(event,i){
	            return function(){
	            	if (infowindow) infowindow.close();
	            	infowindow = new google.maps.InfoWindow();
	                infowindow.setContent(infoWindowEvent[i]);
	                infowindow.open(map, event);
	            }
	        })(event,i));
			
		}
	}
}
function loadEvent(){
	var eventIndex = document.getElementById("sendLoadEvent").value;
	var specficEventCoord = eventDetailCoord[eventIndex];
	var eventsMoreDetailsSplit = eventDetailArray[eventIndex].split("/");
	
	document.getElementById("eventName").innerHTML = eventsMoreDetailsSplit[0];
	document.getElementById("eventDescription").innerHTML = eventsMoreDetailsSplit[1];
	document.getElementById("eventTime").innerHTML = eventsMoreDetailsSplit[2]+" - "+eventsMoreDetailsSplit[3];
	document.getElementById("eventDate").innerHTML = eventsMoreDetailsSplit[4].substring(0,2)+"/"+eventsMoreDetailsSplit[4].substring(2,4)+"/"+eventsMoreDetailsSplit[4].substring(4,8);
	
	var listOfPartcipants = "";
	for(var i = 5;i<eventsMoreDetailsSplit.length;i++){
		listOfPartcipants += eventsMoreDetailsSplit[i]+",";
	}
	document.getElementById("eventParticipants").innerHTML = listOfPartcipants;
	
	var eventLocation="";
	geocoder.geocode({'latLng': specficEventCoord}, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {
	      if (results[1]) {
	    	  document.getElementById("eventLocation").innerHTML = results[1].formatted_address;
	    	  $('#eventDetails').modal({show:true})
	      } else {
	    	  document.getElementById("eventLocation").innerHTML = "No results found";
	    	  $('#eventDetails').modal({show:true})
	      }
	    } else {
	    	document.getElementById("eventLocation").innerHTML = "No results found";
	    	$('#eventDetails').modal({show:true})
	    }
	  });
}