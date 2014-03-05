function createMarkers() {
  var smu = new google.maps.LatLng(1.296661,103.849886);
  var marker = new google.maps.Marker({
      position: smu,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Status 1'
  });
  var center = new google.maps.LatLng(1.367790,103.802789);
  var event = new google.maps.Marker({
      position: center,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Event 1',
      icon: 'images/calendar.png'
  });
  var image = new Image();
  image.src = 'images/photo/cat1.jpg';

  var pinIcon = new google.maps.MarkerImage(
      image.src,
      null, /* size is determined at runtime */
      null, /* origin is 0,0 */
      null, /* anchor is bottom center of the scaled image */
      new google.maps.Size(50, 50)
  );
  var cat = new google.maps.LatLng(1.31806,103.70722);
  var photo = new google.maps.Marker({
      position: cat,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Photo 1',
      icon: pinIcon
  });
  
  //Event listener for markers
  google.maps.event.addListener(marker, 'click', function() {
	  var html="<strong>Stanley said: </strong><hr> I like to eat! <br><br>" +
	  		"<font size='1'> 5 hours ago </font>&nbsp&nbsp<button width='2' height='2'>Steady</button></font>";
	  if (infowindow) infowindow.close();
	    infowindow = new google.maps.InfoWindow({content: html});
	    infowindow.open(map,marker);
  });
  google.maps.event.addListener(event, 'click', function() {
	  var html="<strong>Go & Eat </strong><hr>Created By: Rebecca <br><br>"+
	  "<font size='1'> More information </font><a href='#'><img src='images/right arrow.png' align='right' height='20' width='20'></a><br><br>"+
	  "<font size='1'> 5 hours ago </font>&nbsp&nbsp<button width='2px' height='2px'>Steady</button>";
	  if (infowindow) infowindow.close();
	    infowindow = new google.maps.InfoWindow({content: html});
	    infowindow.open(map,event);
  });
  google.maps.event.addListener(photo, 'click', function() {
	  var html="<strong>Abby: </strong><hr>"+
	  "<img src='images/photo/cat1.png' height='250' width='250'><br><br>"+
	  "I love my cat! at sentosa<br><br>"+
	  "<button width='2px' height='2px'>Steady</button>";
	  if (infowindow) infowindow.close();
	    infowindow = new google.maps.InfoWindow({content: html});
	    infowindow.open(map,photo);
  });
}
