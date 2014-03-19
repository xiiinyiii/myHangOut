var infoWindowStatus = [];
var infoWindowPhoto = [];
var infoWindowEvent = [];
var eventDetailArray = [];
var eventDetailCoord = [];
var recentPost = [];
var recentMarker = [];
var storePhoto=[];
var storeAddressFb=["328 Katong Laksa,55 East Coast Road, Singapore 428772","Bird Park, 2 Jurong Hill Singapore","Hougang Mall,90 Hougang Avenue 10, Singapore 538766","Serangoon Village,1 Maju Avenue Singapore 556679","East Coast Park Service Road, Singapore","Bukit Gombak Gym,810 Bukit Batok West Avenue 5 Singapore, Singapore 659081","Goat farm,3 Lim Chu Kang Lane 4, 718859","Plaza Singapura, 60 Orchard Road, Singapore 238889","Toa Payoh Hersing Centre, 450 Toa Payoh Lorong 6","Causeway Point, 1 Woodlands Square, Singapore 738099","Yishun Ten Complex,51 Yishun Central 1, Singapore 768794","112 Katong Singapore","Jai Thai,7 Clover Way Singapore 579080","The Cathay,2 Handy Road, Singapore 229233","Gardens By The Bay,18 Marina Gardens Drive, Singapore 018953","Botanic Garden,753 Tyersall Avenue, Singapore 257700","Pasir Ris Park,51 Pasir Ris Green, Singapore 518226","Mastercrab, 3 Choa Chu Kang Way, Singapore","Jurong Point,Jurong West Central 2","Heartland Mall 205 Hougang Street 21 Singapore","49 Seats,49 Kreta Ayer Road, Singapore 089007","East Coast Park Service Road, Singapore","Pulau Ubin,224B Pulau Ubin, Singapore 508345","Nex, Upper Serangoon Road","Nanyang Technology University,50 Nanyang Avenue Singapore 639798","Pasir Risk Park","Holland Village,267 Holland Avenue, Singapore 278989","Fullerton Hotel,80 Collyer Quay Singapore 049326","Hungry Chimps,64 Prinsep Street, Singapore 188667","799 Bedok South Avenue 1, Singapore 469335","621 Bukit Batok Central, Singapore 650621","Ang Mo Kio Hub,53 Ang Mo Kio Avenue 3, 569933","Resorts World Sentosa, 8 Sentosa Gateway, Singapore 6577 8899","Old Airport Road Singapore","Tampines Mall, 505 Tampines Central 1, Singapore","Plaza Singapura Orchard Road Singapore","Ice Edge Cafe, 2 Kovan Road, Singapore 548008","JCube, 2 Jurong East Central 1,Singapore 609731"];
var storeAddressTw=["Coffee Shop,140 Upper Bukit Timah Road, Singapore 588176","The Shoppes at Marina Bay Sands,10 Bayfront Ave, Singapore","Causeway Point, 1 Woodlands Square, Singapore 738099","Universal Studio Singapore, 30 Sentosa Gateway, Singapore 098140","Bottle Tree,81 Lorong Chencharu Singapore 769198","Marina Barrage, 260 Marina Way, 018976","Expo,1 Expo Drive Singapore","IMM,2 Jurong East Street 21, Singapore 609601","Kallang Ice Skating,5 Stadium Walk, Singapore 397693","Ice Edge Cafe,2 Kovan Rd, Singapore 548008","Tampines Mall,2 Tampines Central 5, Singapore 529509","Createaf Waffles,2 Handy Road Level 1","Big MaMa Korean Restuarant,2 Kim Tian Road, Singapore 169244","Chomp Chomp,20 Kensington Park Rd, Singapore 557269","Plaza Singapura,68 Orchard Road Singapore","Mandarin Gallery,333A Orchard Rd, 238897","Le Chocolat Cafe, 28 Ann Siang Rd., 069708","Wheeler's Yard,28 Lorong Ampas, 328781","Food For thought cafe, 1 Cluny Road,Singapore Botanic Gardens, Singapore, 259569","Kith Cafe,7 Rodyk St , 238215"];
var storeAddressIn=["85 Bedok North Road, Singapore","Universal Studio Singapore,30 Sentosa Gateway, Singapore 098140","East Coast Park","Safra Yishun, 60 Yishun Ave 4", "lola cafe,5 Simon Road, Singapore 545893","Superbowl Jurong,1 Yuan Ching Road","Marina Country Club,600 Ponggol Seventeenth Ave","Marche JEM,3 Toh Tuck Link, Singapore 596228","The Jewel Box,109 Mt Faber Rd, 099203","Pasir Ris Park,51 Pasir Ris Green, Singapore 518226","49 Seats,49 Kreta Ayer Rd, 089007","McDonald, 11 King Albert Park Singapore","Expo,1 Expo Drive Singapore","Hatched,267 Holland Avenue Singapore","The Star Vista,1 Vista Exchange Green, Singapore 138617","Novena Square,238 Thomson Road Singapore 307683","IKEA Tampines, 60 Tampines North Drive 2, (S)528764","Master Crab Choa Chu Kang, Blk 475 Choa Chu Kang Ave 3","Orchid Country Club,1 Orchid Club Rd","Night Safari, 80 Mandai Lake Rd, Singapore"];
var storeAddress=[];
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
	if(numOfPost[0]=="twitter"){
		storeAddress = storeAddressTw;
	}else if(numOfPost[0]=="instagram"){
		storeAddress = storeAddressIn;
	}else{
		storeAddress = storeAddressFb;
	}
	for(var i = 0; i<numOfPost[2];i++){
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
	  		"<font size='1'>1 hours ago"+
	  		"<br>"+storeAddress[i]+"</font></div>";
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
			var imagePath = "images/photo/"+dataSplit[8];
			
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
			  "<font size='1'>"+storeAddress[i]+"</font></div>";
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
					"<img src='images/right arrow.png' onclick='loadEvent()' align='right' height='20' width='20'><br><br>"+
			  "<font size='1'>5 hours ago<br>"+storeAddress[i]+"</font></div>";
			
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