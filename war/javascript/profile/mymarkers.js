var infoWindowProfileStatus = [];
var infoWindowProfilePhoto = [];
var infoWindowProfileEvent = [];
var eventProfileDetailArray = [];
var eventProfileDetailCoord = [];
var allProfileMarker = [];
var storeProfilePhoto=[];
function createMyMarkers() {
	storeProfilePhoto=[];
	
	for(var i = 0; i<friendProfileArray.length;i++){
		var friendInfo = friendProfileArray[i].split(",");
		var typeOfPost = friendInfo[2];
		if(typeOfPost=="Status"){
			var statusLat = friendInfo[3];
			var statusLng = friendInfo[4];
			var statusCoord = new google.maps.LatLng(statusLat,statusLng);
			var marker = new google.maps.Marker({
			      position: statusCoord,
			      map: map,
			      animation: google.maps.Animation.DROP,
			      title: 'Status'
			  });
			allProfileMarker.push(marker);
			//Event listenser 
			infoWindowProfileStatus[i] = "<div id='infoWindow'><strong>"+friendInfo[0]+" said: </strong><hr>"+friendInfo[5]+"<br><br>" +
	  		"<font size='1'>3 hours ago<br>"+
	  		storeProfileAddress[i]+"</font></div>";
			google.maps.event.addListener(marker, 'click', (function(marker,i){
	            return function(){
	            	if (infowindow) infowindow.close();
	            	infowindow = new google.maps.InfoWindow();
	                infowindow.setContent(infoWindowProfileStatus[i]);
	                infowindow.open(map, marker);
	            }
	        })(marker,i));
		}else if(typeOfPost=="Photo"){
			var photoLat = friendInfo[3];
			var photoLng = friendInfo[4];
			var photoCoord = new google.maps.LatLng(photoLat,photoLng);
			
			var imagePath = "images/photo/"+friendInfo[8];
			storeProfilePhoto[i]=imagePath;
			
			var image = new Image();
			image.src = imagePath;
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
			allProfileMarker.push(photo);
			//Event listener
			infoWindowProfilePhoto[i] = "<div id='infoWindow'><strong>"+ friendInfo[0] +"</strong><hr>"+
			"<img src='" + storeProfilePhoto[i] + "' height='100' width='100'><br><br>"+
			friendInfo[5]+"<br><br><font size='1'>"+
	  		storeProfileAddress[i]+"</font></div>";
			google.maps.event.addListener(photo, 'click', (function(photo,i){
	            return function(){
	            	if (infowindow) infowindow.close();
	            	infowindow = new google.maps.InfoWindow();
	                infowindow.setContent(infoWindowProfilePhoto[i]);
	                infowindow.open(map, photo);
	            }
	        })(photo,i));
		}else if(typeOfPost=="Events"){
			var eventLat = friendInfo[3];
			var eventLng = friendInfo[4];
			var eventCoord = new google.maps.LatLng(eventLat,eventLng);
			var event = new google.maps.Marker({
		      position: eventCoord,
		      map: map,
		      animation: google.maps.Animation.DROP,
		      title: 'Event',
		      icon: 'images/calendar.png'
		  });
			allProfileMarker.push(event);
			//Event listener
			var eventsMoreDetails = friendInfo[5].split("/");
			eventProfileDetailArray[i]=friendInfo[5];
			eventProfileDetailCoord[i]=eventCoord;
			
			infoWindowProfileEvent[i] = "<div id='infoWindow'><strong>"+ eventsMoreDetails[0] +"</strong><hr>Created By: "+ friendInfo[0] +"<br><br>"+
			"<input type='hidden' id='sendLoadEvent' value="+i+">"+  
			"<div align='right'><font size='1'> More<br>information </font></div>" +
			"<img src='images/right arrow.png' onclick='loadProfileEvent()' align='right' height='20' width='20'><br><br>"+
			  "<font size='1'>4 hours ago<br>" +
			  storeProfileAddress[i]+"</font></div>";
			google.maps.event.addListener(event, 'click', (function(event,i){
	            return function(){
	            	if (infowindow) infowindow.close();
	            	infowindow = new google.maps.InfoWindow();
	                infowindow.setContent(infoWindowProfileEvent[i]);
	                infowindow.open(map, event);
	            }
	        })(event,i));
		}
	}
}
function loadProfileEvent(){
	var eventIndex = document.getElementById("sendLoadEvent").value;
	var eventsMoreDetailsSplit = eventProfileDetailArray[eventIndex].split("/");
	var specficEventCoord = eventProfileDetailCoord[eventIndex];

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
