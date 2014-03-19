var infowindow;
var geocoder;
var map;
function initialize() {
	alert(sessionStorage.getItem("0"));
	geocoder = new google.maps.Geocoder();
  var myLatlng = new google.maps.LatLng(1.367790,103.802789);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  var sessionStatus = sessionStorage.getItem("0").split(",");
  createMarkers();  

}

google.maps.event.addDomListener(window, 'load', initialize);

function openEvent(){
	$('#eventDetails').modal('show');
	return false;
}