var friendProfileArray=[];
var infowindow;
var geocoder;
var map;
var storeProfileAddress=[];
window.onload=function(){
	//Check session
	var sessionState = sessionStorage.getItem("0");
	var sessionStateSplit = sessionState.split(",");
	
	//Get all friend information
	for(var i = 1; i<sessionStorage.length;i++){
		var sessionData = sessionStorage.getItem(i);
		var sessionDataSplit = sessionData.split(",");
		if(sessionDataSplit[0]==sessionStateSplit[2]){
			friendProfileArray.push(sessionData);
			storeProfileAddress.push(sessionDataSplit[8]);
		}
	}
	//Display Friend's avatar
	var firstData = friendProfileArray[0].split(",");
	document.getElementById("profileAvatar").src = "images/friends/"+firstData[1];
	
	geocoder = new google.maps.Geocoder();
  var myLatlng = new google.maps.LatLng(1.373846,104.435005);
  var mapOptions = {
    zoom: 10,
    center: myLatlng,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
 
  createMyMarkers(); 
};
google.maps.event.addDomListener(window, 'load', initialize);

function openEvent(){
	$('#eventDetails').modal('show');
	return false;
}