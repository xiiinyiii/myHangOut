var filteredHome=[];
var storeFilterPhoto=[];
var filteredMarker=[];
var filteredAddress=[];
var filteredCircle=[new google.maps.LatLng(1.4520997,103.821144),new google.maps.LatLng(1.354625,103.688621),new google.maps.LatLng(1.342268,103.952293),new google.maps.LatLng(1.279114,103.825264)];
function filter(){
	var classStatus = document.getElementById('status').className;
	var classPhoto = document.getElementById('photo').className;
	var classEvent = document.getElementById('event').className;
	
	//clear filtered marker
	for(var i=0;i<filteredMarker.length;i++){
		filteredMarker[i].setMap(null);
	}
	filteredMarker=[];
	
	if(classStatus=="tab-pane active"){
		var months = document.getElementById('statusMonth');
		var selectedMonth = months.options[months.selectedIndex].value;
		
		var years = document.getElementById('statusYear');
		var selectedYear = years.options[years.selectedIndex].value;
		
		var regions = document.getElementById('statusRegion');
		var selectedRegion = regions.options[regions.selectedIndex].value;
		
		var filteredProfileTemp=[];
		for(var i = 0;i<sessionStorage.length-1;i++){
			var sessionDetails = sessionStorage.getItem(i+1);
			var friendsInfo = sessionDetails.split(",");
			if(friendsInfo[2]=="Status"){
				filteredProfileTemp.push(friendsInfo);
			}
		}
		var filteredProfileTemp2=[];
		var enterTemp2 = false;
		if(selectedMonth!="any"){
			enterTemp2 = true;
			for(var i = 0;i<filteredProfileTemp.length;i++){
				var friendsInfo = filteredProfileTemp[i].toString().split(",");
				if(friendsInfo[7].substring(2,4)==selectedMonth){
					filteredProfileTemp2.push(friendsInfo);
				}
			}
		}
		
		if(filteredProfileTemp2.length==0 && enterTemp2==false){
			filteredProfileTemp2=filteredProfileTemp;
		}
		
		var filteredProfileTemp3=[];
		var enterTemp3 = false;
		
		if(selectedYear!="any"){
			enterTemp3 = true;
			for(var i = 0;i<filteredProfileTemp2.length;i++){
				var friendsInfo = filteredProfileTemp2[i].toString().split(",");
				if(friendsInfo[7].substring(4,8)==selectedYear){
					filteredProfileTemp3.push(friendsInfo);
				}
			}
		}
		
		if(filteredProfileTemp3.length==0 && enterTemp3==false){
			filteredProfileTemp3=filteredProfileTemp2;
		}
		
		var filteredProfileTemp4=[];
		var enterTemp4 = false;
		if(selectedRegion!="any"){
			enterTemp4 = true;
			for(var i = 0;i<filteredProfileTemp3.length;i++){
				var friendsInfo = filteredProfileTemp3[i].toString().split(",");
				if(selectedRegion=="north"){
					var marker = new google.maps.Marker({
					      position: filteredCircle[0]
					  });
					var circle = new google.maps.Circle({
					    clickable: false,
					    // metres
					    radius: 10000,
					    fillColor: '#fff',
					    fillOpacity: .6,
					    strokeColor: '#313131',
					    strokeOpacity: .4,
					    strokeWeight: .8
					});
					// Attach circle to marker
					circle.bindTo('center', marker, 'position');
					var bounds = circle.getBounds();
					if(bounds.contains(new google.maps.LatLng(friendsInfo[3],friendsInfo[4]))){
						filteredProfileTemp4.push(friendsInfo);
					}
				}else if(selectedRegion=="west"){
					var marker = new google.maps.Marker({
					      position: filteredCircle[1]
					  });
					var circle = new google.maps.Circle({
					    clickable: false,
					    // metres
					    radius: 10000,
					    fillColor: '#fff',
					    fillOpacity: .6,
					    strokeColor: '#313131',
					    strokeOpacity: .4,
					    strokeWeight: .8
					});
					// Attach circle to marker
					circle.bindTo('center', marker, 'position');
					var bounds = circle.getBounds();
					if(bounds.contains(new google.maps.LatLng(friendsInfo[3],friendsInfo[4]))){
						filteredProfileTemp4.push(friendsInfo);
					}
				}else if(selectedRegion=="east"){
					var marker = new google.maps.Marker({
					      position: filteredCircle[2]
					  });
					var circle = new google.maps.Circle({
					    clickable: false,
					    // metres
					    radius: 10000,
					    fillColor: '#fff',
					    fillOpacity: .6,
					    strokeColor: '#313131',
					    strokeOpacity: .4,
					    strokeWeight: .8
					});
					// Attach circle to marker
					circle.bindTo('center', marker, 'position');
					var bounds = circle.getBounds();
					if(bounds.contains(new google.maps.LatLng(friendsInfo[3],friendsInfo[4]))){
						filteredProfileTemp4.push(friendsInfo);
					}

				}else if(selectedRegion=="south"){
					var marker = new google.maps.Marker({
					      position: filteredCircle[3]
					  });
					var circle = new google.maps.Circle({
					    clickable: false,
					    // metres
					    radius: 10000,
					    fillColor: '#fff',
					    fillOpacity: .6,
					    strokeColor: '#313131',
					    strokeOpacity: .4,
					    strokeWeight: .8
					});
					// Attach circle to marker
					circle.bindTo('center', marker, 'position');
					var bounds = circle.getBounds();
					if(bounds.contains(new google.maps.LatLng(friendsInfo[3],friendsInfo[4]))){
						filteredProfileTemp4.push(friendsInfo);
					}
				}
			}
		}

		if(filteredProfileTemp4.length==0 && enterTemp4==false){
			filteredProfileTemp4=filteredProfileTemp3;
		}
		filteredHome = filteredProfileTemp4;
	}else if(classPhoto=="tab-pane active"){
		var months = document.getElementById('photoMonth');
		var selectedMonth = months.options[months.selectedIndex].value;
		
		var years = document.getElementById('photoYear');
		var selectedYear = years.options[years.selectedIndex].value;
		
		var regions = document.getElementById('photoRegion');
		var selectedRegion = regions.options[regions.selectedIndex].value;
		
		var filteredProfileTemp=[];
		for(var i = 0;i<sessionStorage.length-1;i++){
			var sessionDetails = sessionStorage.getItem(i+1);
			var friendsInfo = sessionDetails.split(",");
			if(friendsInfo[2]=="Photo"){
				filteredProfileTemp.push(friendsInfo);
			}
		}
		
		var filteredProfileTemp2=[];
		if(selectedMonth!="any"){
			for(var i = 0;i<filteredProfileTemp.length;i++){
				var friendsInfo = filteredProfileTemp[i].toString().split(",");
				if(friendsInfo[7].substring(2,4)==selectedMonth){
					filteredProfileTemp2.push(friendsInfo);
				}
			}
		}
		
		if(filteredProfileTemp2.length==0){
			filteredProfileTemp2=filteredProfileTemp;
		}
		var filteredProfileTemp3=[];
		if(selectedYear!="any"){
			for(var i = 0;i<filteredProfileTemp2.length;i++){
				var friendsInfo = filteredProfileTemp2[i].toString().split(",");
				if(friendsInfo[7].substring(4,8)==selectedYear){
					filteredProfileTemp3.push(friendsInfo);
				}
			}
		}
		
		if(filteredProfileTemp3.length==0){
			filteredProfileTemp3=filteredProfileTemp2;
		}
		var filteredProfileTemp4=[];
		var enterTemp4 = false;
		if(selectedRegion!="any"){
			enterTemp4 = true;
			for(var i = 0;i<filteredProfileTemp3.length;i++){
				var friendsInfo = filteredProfileTemp3[i].toString().split(",");
				if(selectedRegion=="north"){
					var marker = new google.maps.Marker({
					      position: filteredCircle[0]
					  });
					var circle = new google.maps.Circle({
					    clickable: false,
					    // metres
					    radius: 10000,
					    fillColor: '#fff',
					    fillOpacity: .6,
					    strokeColor: '#313131',
					    strokeOpacity: .4,
					    strokeWeight: .8
					});
					// Attach circle to marker
					circle.bindTo('center', marker, 'position');
					var bounds = circle.getBounds();
					if(bounds.contains(new google.maps.LatLng(friendsInfo[3],friendsInfo[4]))){
						filteredProfileTemp4.push(friendsInfo);
					}
				}else if(selectedRegion=="west"){
					var marker = new google.maps.Marker({
					      position: filteredCircle[1]
					  });
					var circle = new google.maps.Circle({
					    clickable: false,
					    // metres
					    radius: 10000,
					    fillColor: '#fff',
					    fillOpacity: .6,
					    strokeColor: '#313131',
					    strokeOpacity: .4,
					    strokeWeight: .8
					});
					// Attach circle to marker
					circle.bindTo('center', marker, 'position');
					var bounds = circle.getBounds();
					if(bounds.contains(new google.maps.LatLng(friendsInfo[3],friendsInfo[4]))){
						filteredProfileTemp4.push(friendsInfo);
					}
				}else if(selectedRegion=="east"){
					var marker = new google.maps.Marker({
					      position: filteredCircle[2]
					  });
					var circle = new google.maps.Circle({
					    clickable: false,
					    // metres
					    radius: 10000,
					    fillColor: '#fff',
					    fillOpacity: .6,
					    strokeColor: '#313131',
					    strokeOpacity: .4,
					    strokeWeight: .8
					});
					// Attach circle to marker
					circle.bindTo('center', marker, 'position');
					var bounds = circle.getBounds();
					if(bounds.contains(new google.maps.LatLng(friendsInfo[3],friendsInfo[4]))){
						filteredProfileTemp4.push(friendsInfo);
					}

				}else if(selectedRegion=="south"){
					var marker = new google.maps.Marker({
					      position: filteredCircle[3]
					  });
					var circle = new google.maps.Circle({
					    clickable: false,
					    // metres
					    radius: 10000,
					    fillColor: '#fff',
					    fillOpacity: .6,
					    strokeColor: '#313131',
					    strokeOpacity: .4,
					    strokeWeight: .8
					});
					// Attach circle to marker
					circle.bindTo('center', marker, 'position');
					var bounds = circle.getBounds();
					if(bounds.contains(new google.maps.LatLng(friendsInfo[3],friendsInfo[4]))){
						filteredProfileTemp4.push(friendsInfo);
					}
				}
			}
		}

		if(filteredProfileTemp4.length==0 && enterTemp4==false){
			filteredProfileTemp4=filteredProfileTemp3;
		}
		filteredHome = filteredProfileTemp4;
		
	}else if(classEvent=="tab-pane active"){
		var months = document.getElementById('eventMonth');
		var selectedMonth = months.options[months.selectedIndex].value;
		
		var years = document.getElementById('eventYear');
		var selectedYear = years.options[years.selectedIndex].value;
		
		var regions = document.getElementById('eventRegion');
		var selectedRegion = regions.options[regions.selectedIndex].value;
		
		var eventName = document.getElementById('eventNameFilter').value;
		
		var filteredProfileTemp=[];
		for(var i = 0;i<sessionStorage.length-1;i++){
			var sessionDetails = sessionStorage.getItem(i+1);
			var friendsInfo = sessionDetails.split(",");
			if(friendsInfo[2]=="Events"){
				filteredProfileTemp.push(friendsInfo);
			}
		}
		
		var filteredProfileTemp2=[];
		if(selectedMonth!="any"){
			for(var i = 0;i<filteredProfileTemp.length;i++){
				var friendsInfo = filteredProfileTemp[i].toString().split(",");
				if(friendsInfo[7].substring(2,4)==selectedMonth){
					filteredProfileTemp2.push(friendsInfo);
				}
			}
		}
		
		if(filteredProfileTemp2.length==0){
			filteredProfileTemp2=filteredProfileTemp;
		}
		var filteredProfileTemp3=[];
		if(selectedYear!="any"){
			for(var i = 0;i<filteredProfileTemp2.length;i++){
				var friendsInfo = filteredProfileTemp2[i].toString().split(",");
				if(friendsInfo[7].substring(4,8)==selectedYear){
					filteredProfileTemp3.push(friendsInfo);
				}
			}
		}
		
		if(filteredProfileTemp3.length==0){
			filteredProfileTemp3=filteredProfileTemp2;
		}
		var filteredProfileTemp4=[];
		var enterTemp4 = false;
		if(selectedRegion!="any"){
			enterTemp4 = true;
			for(var i = 0;i<filteredProfileTemp3.length;i++){
				var friendsInfo = filteredProfileTemp3[i].toString().split(",");
				if(selectedRegion=="north"){
					var marker = new google.maps.Marker({
					      position: filteredCircle[0]
					  });
					var circle = new google.maps.Circle({
					    clickable: false,
					    // metres
					    radius: 10000,
					    fillColor: '#fff',
					    fillOpacity: .6,
					    strokeColor: '#313131',
					    strokeOpacity: .4,
					    strokeWeight: .8
					});
					// Attach circle to marker
					circle.bindTo('center', marker, 'position');
					var bounds = circle.getBounds();
					if(bounds.contains(new google.maps.LatLng(friendsInfo[3],friendsInfo[4]))){
						filteredProfileTemp4.push(friendsInfo);
					}
				}else if(selectedRegion=="west"){
					var marker = new google.maps.Marker({
					      position: filteredCircle[1]
					  });
					var circle = new google.maps.Circle({
					    clickable: false,
					    // metres
					    radius: 10000,
					    fillColor: '#fff',
					    fillOpacity: .6,
					    strokeColor: '#313131',
					    strokeOpacity: .4,
					    strokeWeight: .8
					});
					// Attach circle to marker
					circle.bindTo('center', marker, 'position');
					var bounds = circle.getBounds();
					if(bounds.contains(new google.maps.LatLng(friendsInfo[3],friendsInfo[4]))){
						filteredProfileTemp4.push(friendsInfo);
					}
				}else if(selectedRegion=="east"){
					var marker = new google.maps.Marker({
					      position: filteredCircle[2]
					  });
					var circle = new google.maps.Circle({
					    clickable: false,
					    // metres
					    radius: 10000,
					    fillColor: '#fff',
					    fillOpacity: .6,
					    strokeColor: '#313131',
					    strokeOpacity: .4,
					    strokeWeight: .8
					});
					// Attach circle to marker
					circle.bindTo('center', marker, 'position');
					var bounds = circle.getBounds();
					if(bounds.contains(new google.maps.LatLng(friendsInfo[3],friendsInfo[4]))){
						filteredProfileTemp4.push(friendsInfo);
					}

				}else if(selectedRegion=="south"){
					var marker = new google.maps.Marker({
					      position: filteredCircle[3]
					  });
					var circle = new google.maps.Circle({
					    clickable: false,
					    // metres
					    radius: 10000,
					    fillColor: '#fff',
					    fillOpacity: .6,
					    strokeColor: '#313131',
					    strokeOpacity: .4,
					    strokeWeight: .8
					});
					// Attach circle to marker
					circle.bindTo('center', marker, 'position');
					var bounds = circle.getBounds();
					if(bounds.contains(new google.maps.LatLng(friendsInfo[3],friendsInfo[4]))){
						filteredProfileTemp4.push(friendsInfo);
					}
				}
			}
		}
		
		if(filteredProfileTemp4.length==0 && enterTemp4==false){
			filteredProfileTemp4=filteredProfileTemp3;
		}
		var filteredProfileTemp5=[];
		var enterTemp5 = false;
		if(eventName!=""){
			enterTemp5 = true;
			for(var i = 0;i<filteredProfileTemp4.length;i++){
				var friendsInfo = filteredProfileTemp4[i].toString().split(",");
				var eventInfo = friendsInfo[5].split("/");
				if(eventInfo[0]==eventName){
					filteredProfileTemp5.push(friendsInfo);
				}
			}
		}
		if(enterTemp5==true){
			filteredHome = filteredProfileTemp5;
		}else{
			filteredHome = filteredProfileTemp4;
		}
	}
	
	//Close modal
	$('#myModal').modal('hide');
	$('body').removeClass('modal-open');
	$('.modal-backdrop').remove();
	createFilter();
}
function createFilter(){
	storeFilterPhoto=[];
	for(var i = 0;i<recentMarker.length;i++){
		recentMarker[i].setMap(null);
	}
	
	var sessionNumPost = sessionStorage.getItem("0");
	var sessionNumPostSplit = sessionNumPost.split(",");
	for(var i = 0;i<sessionNumPostSplit[1];i++){
		var friendInfoString = filteredHome[i];
		var friendInfo = friendInfoString.toString().split(",");
		var typeOfPost = friendInfo[2];
		//alert(friendInfoString);
		
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
			filteredMarker.push(marker);
			
			//Event listenser 
			infoWindowStatus[i] = "<div id='infoWindow'><strong>"+friendInfo[0]+" said: </strong><hr>"+friendInfo[5]+"<br><br>" +
	  		"<font size='1'><b>Time:</b> "+friendInfo[6]+"<br><b>Date:</b> "+friendInfo[7].substring(0,2)+"/"+friendInfo[7].substring(2,4)+"/"+friendInfo[7].substring(4)+
	  		"<br><b>Address:</b> "+friendInfo[8]+"<br><br>" +
	  		"<img src='images/like.png' height='25px' width='25px'>25 likes</font></div>";
			
			
			google.maps.event.addListener(marker, 'click', (function(marker,i){
	            return function(){
	            	if (infowindow) infowindow.close();
	            	infowindow = new google.maps.InfoWindow();
	                infowindow.setContent(infoWindowStatus[i]);
	                infowindow.open(map, marker);
	            }
	        })(marker,i));
			
		}else if(typeOfPost=="Photo"){
			var photoLat = friendInfo[3];
			var photoLng = friendInfo[4];
			var photoCoord = new google.maps.LatLng(photoLat,photoLng);
			
			var imagePath = "images/photo/"+friendInfo[9];
			
			var image = new Image();
			image.src = imagePath;
			
			storeFilterPhoto[i]=imagePath;
			
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
			filteredMarker.push(photo);
			
			//Event listener
			infoWindowPhoto[i] = "<div id='infoWindow'><strong>"+ friendInfo[0] +"</strong><hr>"+
			"<img src='" + storeFilterPhoto[i] + "' height='100' width='100'><br><br>"+
			friendInfo[5]+"<br><br>"+
			  "<font size='1'><b>Time:</b> "+friendInfo[6]+"<br><b>Date:</b> "+friendInfo[7].substring(0,2)+"/"+friendInfo[7].substring(2,4)+"/"+friendInfo[7].substring(4)+
			  "<br><b>Address:</b> "+friendInfo[8]+"<br><br>" +
			  	"<img src='images/like.png' height='25px' width='25px'>17 likes</font></div>";
			google.maps.event.addListener(photo, 'click', (function(photo,i){
	            return function(){
	            	if (infowindow) infowindow.close();
	            	infowindow = new google.maps.InfoWindow();
	                infowindow.setContent(infoWindowPhoto[i]);
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
			filteredMarker.push(event);
			
			//Event listener
			var eventsMoreDetails = friendInfo[5].split("/");
			eventDetailArray[i]=friendInfo[5];
			eventDetailCoord[i]=eventCoord;
			
			infoWindowEvent[i] = "<div id='infoWindow'><strong>"+ eventsMoreDetails[0] +"</strong><hr>Created By: "+ friendInfo[0] +"<br><br>"+
			"<input type='hidden' id='sendLoadEvent' value="+i+">"+  
			"<div align='right'><font size='1'> More<br>information </font></div>" +
					"<img src='images/right_arrow.png' onclick='loadEvent()' align='right' height='20' width='20'><br><br>"+
			  "<font size='1'><b>Time:</b> "+friendInfo[6]+"<br><b>Date:</b> "+friendInfo[7].substring(0,2)+"/"+friendInfo[7].substring(2,4)+"/"+friendInfo[7].substring(4)+
			  "<br><b>Address:</b></br> "+friendInfo[8]+"<br><br>" +
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
