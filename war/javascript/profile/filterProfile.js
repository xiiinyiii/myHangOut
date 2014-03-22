var filteredProfile=[];
var storeFilterProfilePhoto=[];
var filteredCircle=[new google.maps.LatLng(1.4520997,103.821144),new google.maps.LatLng(1.354625,103.688621),new google.maps.LatLng(1.342268,103.952293),new google.maps.LatLng(1.279114,103.825264)];
function filterProfile(){
	var classStatus = document.getElementById('status').className;
	var classPhoto = document.getElementById('photo').className;
	var classEvent = document.getElementById('event').className;
	filteredProfile=[];
	
	if(classStatus=="tab-pane active"){
		var months = document.getElementById('statusMonth');
		var selectedMonth = months.options[months.selectedIndex].value;
		
		var years = document.getElementById('statusYear');
		var selectedYear = years.options[years.selectedIndex].value;
		
		var regions = document.getElementById('statusRegion');
		var selectedRegion = regions.options[regions.selectedIndex].value;
		
		var filteredProfileTemp=[];
		for(var i = 0;i<friendProfileArray.length;i++){
			var friendsInfo = friendProfileArray[i].split(",");
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
					    draggable:true,
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
					google.maps.event.addListener(marker, 'click',function(){
			            alert(marker.position);
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

		if(filteredProfileTemp4.length==0  && enterTemp4==false){
			filteredProfileTemp4=filteredProfileTemp3;
		}
		filteredProfile = filteredProfileTemp4;
	}else if(classPhoto=="tab-pane active"){
		var months = document.getElementById('photoMonth');
		var selectedMonth = months.options[months.selectedIndex].value;
		
		var years = document.getElementById('photoYear');
		var selectedYear = years.options[years.selectedIndex].value;
		
		var regions = document.getElementById('photoRegion');
		var selectedRegion = regions.options[regions.selectedIndex].value;
		
		var filteredProfileTemp=[];
		for(var i = 0;i<friendProfileArray.length;i++){
			var friendsInfo = friendProfileArray[i].split(",");
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
		filteredProfile = filteredProfileTemp4;
		
	}else if(classEvent=="tab-pane active"){
		var months = document.getElementById('eventMonth');
		var selectedMonth = months.options[months.selectedIndex].value;
		
		var years = document.getElementById('eventYear');
		var selectedYear = years.options[years.selectedIndex].value;
		
		var regions = document.getElementById('eventRegion');
		var selectedRegion = regions.options[regions.selectedIndex].value;
		
		var eventName = document.getElementById('eventNameFilter').value;
		
		var filteredProfileTemp=[];
		for(var i = 0;i<friendProfileArray.length;i++){
			var friendsInfo = friendProfileArray[i].split(",");
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
			filteredProfile = filteredProfileTemp5;
		}else{
			filteredProfile = filteredProfileTemp4;
		}
	}
	//Close modal
	$('#myModal').modal('hide') 
	createFilterProfile();
}
function createFilterProfile(){
	storeFilterProfilePhoto=[];
	for(var i = 0;i<allProfileMarker.length;i++){
		allProfileMarker[i].setMap(null);
	}
	
	for(var i = 0;i<filteredProfile.length;i++){
		var friendInfoString = filteredProfile[i];
		var friendInfo = friendInfoString.toString().split(",");
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
	  		"<font size='1'>2 hours ago<br>" +
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
			storeFilterProfilePhoto[i]=imagePath;
			
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
			"<img src='" + storeFilterProfilePhoto[i] +"' height='100' width='100'><br><br>"+
			friendInfo[5]+"<br><br></div>";
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
			"<img src='images/right_arrow.png' onclick='loadProfileEvent()' align='right' height='20' width='20'><br><br>"+
			  "<font size='1'>7 hours ago<br>" +
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