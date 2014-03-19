var friendProfileArray=[];
var infowindow;
var geocoder;
var map;
var storeAddressFb=["328 Katong Laksa,55 East Coast Road, Singapore 428772","Bird Park, 2 Jurong Hill Singapore","Hougang Mall,90 Hougang Avenue 10, Singapore 538766","Serangoon Village,1 Maju Avenue Singapore 556679","East Coast Park Service Road, Singapore","Bukit Gombak Gym,810 Bukit Batok West Avenue 5 Singapore, Singapore 659081","Goat farm,3 Lim Chu Kang Lane 4, 718859","Plaza Singapura, 60 Orchard Road, Singapore 238889","Toa Payoh Hersing Centre, 450 Toa Payoh Lorong 6","Causeway Point, 1 Woodlands Square, Singapore 738099","Yishun Ten Complex,51 Yishun Central 1, Singapore 768794","112 Katong Singapore","Jai Thai,7 Clover Way Singapore 579080","The Cathay,2 Handy Road, Singapore 229233","Gardens By The Bay,18 Marina Gardens Drive, Singapore 018953","Botanic Garden,753 Tyersall Avenue, Singapore 257700","Pasir Ris Park,51 Pasir Ris Green, Singapore 518226","Mastercrab, 3 Choa Chu Kang Way, Singapore","Jurong Point,Jurong West Central 2","Heartland Mall 205 Hougang Street 21 Singapore","49 Seats,49 Kreta Ayer Road, Singapore 089007","East Coast Park Service Road, Singapore","Pulau Ubin,224B Pulau Ubin, Singapore 508345","Nex, Upper Serangoon Road","Nanyang Technology University,50 Nanyang Avenue Singapore 639798","Pasir Risk Park","Holland Village,267 Holland Avenue, Singapore 278989","Fullerton Hotel,80 Collyer Quay Singapore 049326","Hungry Chimps,64 Prinsep Street, Singapore 188667","799 Bedok South Avenue 1, Singapore 469335","621 Bukit Batok Central, Singapore 650621","Ang Mo Kio Hub,53 Ang Mo Kio Avenue 3, 569933","Resorts World Sentosa, 8 Sentosa Gateway, Singapore 6577 8899","Old Airport Road Singapore","Tampines Mall, 505 Tampines Central 1, Singapore","Plaza Singapura Orchard Road Singapore","Ice Edge Cafe, 2 Kovan Road, Singapore 548008","JCube, 2 Jurong East Central 1,Singapore 609731"];
var storeAddressTw=["Coffee Shop,140 Upper Bukit Timah Road, Singapore 588176","The Shoppes at Marina Bay Sands,10 Bayfront Ave, Singapore","Causeway Point, 1 Woodlands Square, Singapore 738099","Universal Studio Singapore, 30 Sentosa Gateway, Singapore 098140","Bottle Tree,81 Lorong Chencharu Singapore 769198","Marina Barrage, 260 Marina Way, 018976","Expo,1 Expo Drive Singapore","IMM,2 Jurong East Street 21, Singapore 609601","Kallang Ice Skating,5 Stadium Walk, Singapore 397693","Ice Edge Cafe,2 Kovan Rd, Singapore 548008","Tampines Mall,2 Tampines Central 5, Singapore 529509","Createaf Waffles,2 Handy Road Level 1","Big MaMa Korean Restuarant,2 Kim Tian Road, Singapore 169244","Chomp Chomp,20 Kensington Park Rd, Singapore 557269","Plaza Singapura,68 Orchard Road Singapore","Mandarin Gallery,333A Orchard Rd, 238897","Le Chocolat Cafe, 28 Ann Siang Rd., 069708","Wheeler's Yard,28 Lorong Ampas, 328781","Food For thought cafe, 1 Cluny Road,Singapore Botanic Gardens, Singapore, 259569","Kith Cafe,7 Rodyk St , 238215"];
var storeAddressIn=["85 Bedok North Road, Singapore","Universal Studio Singapore,30 Sentosa Gateway, Singapore 098140","East Coast Park","Safra Yishun, 60 Yishun Ave 4", "lola cafe,5 Simon Road, Singapore 545893","Superbowl Jurong,1 Yuan Ching Road","Marina Country Club,600 Ponggol Seventeenth Ave","Marche JEM,3 Toh Tuck Link, Singapore 596228","The Jewel Box,109 Mt Faber Rd, 099203","Pasir Ris Park,51 Pasir Ris Green, Singapore 518226","49 Seats,49 Kreta Ayer Rd, 089007","McDonald, 11 King Albert Park Singapore","Expo,1 Expo Drive Singapore","Hatched,267 Holland Avenue Singapore","The Star Vista,1 Vista Exchange Green, Singapore 138617","Novena Square,238 Thomson Road Singapore 307683","IKEA Tampines, 60 Tampines North Drive 2, (S)528764","Master Crab Choa Chu Kang, Blk 475 Choa Chu Kang Ave 3","Orchid Country Club,1 Orchid Club Rd","Night Safari, 80 Mandai Lake Rd, Singapore"];
var storeAddress=[];
var storeProfileAddress=[];
window.onload=function(){
	//Check session
	var sessionState = sessionStorage.getItem("0");
	var sessionStateSplit = sessionState.split(",");
	if(sessionStateSplit[0]=="twiter"){
		storeAddress = storeAddressTw;
	}else if(sessionStateSplit[0]=="instagram"){
		storeAddress = storeAddressIn;
	}else{
		storeAddress = storeAddressFb;
	}
	
	//Get all friend information
	for(var i = 1; i<sessionStorage.length;i++){
		var sessionData = sessionStorage.getItem(i);
		var sessionDataSplit = sessionData.split(",");
		if(sessionDataSplit[0]==sessionStateSplit[3]){
			friendProfileArray.push(sessionData);
			storeProfileAddress.push(storeAddress[i]);
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