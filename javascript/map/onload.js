var infowindow;
var geocoder;
var map;
window.onload=function(){
	var sessionState = sessionStorage.getItem("0");
	//var sessionStateSplit = sessionState.split(",");
	
	if(sessionState==null){
		sessionStorage.clear();
		
		sessionStorage.setItem("0", "home,20"); //3 types of status: home, profile, filter
		sessionStorage.setItem("1", "Stanley,boy/face3.jpg,Photo,1.3050905124228618,103.90330670921003,Best Laksa in Singapore!328 LAKSA HUAT AH!,2054,16032014,328 Katong Laksa.55 East Coast Road. Singapore 428772,laksa_edit.jpg");
		sessionStorage.setItem("2", "Rebecca,girl/face15.jpg,Status,1.3073704,103.88422289999994,Awesome Black Pepper Crab at Tian Tian Zi Char!,2100,15032014,Old Airport Road Singapore");
		sessionStorage.setItem("3", "Rebecca,girl/face15.jpg,Photo,1.3726607973019693,103.89390975236893,Came to fish manhatten!love it!,1730,15032014,Fish Manhatten. Hougang Mall. 90 Hougang Avenue 10. Singapore 538766,fish-Copy.jpg");
		sessionStorage.setItem("4", "Rebecca,girl/face15.jpg,Photo,1.3652169,103.86526200000003,eating UDDERS ice cream at serngoon garden vilage!,2030,15032014,Udders. Serangoon Village. 1 Maju Avenue Singapore 556679,ice_cream-Copy.jpg");
		sessionStorage.setItem("5", "Rebecca,girl/face15.jpg,Photo,1.3007239,103.91188119999993,Watching sunset with my dearest Mr. Donavan at East Coast Park! ,1825,14032014,East Coast Park Service Road. Singapore,east_coast-Copy.jpg");
		sessionStorage.setItem("6", "Stanley,boy/face3.jpg,Status,1.359667,103.75222800000006,The facilities at Bukit Gombak Gym are DAEBAK! I will definitely come here next time!,1810,10032014,Bukit Gombak Gym. 810 Bukit Batok West Avenue 5 Singapore. Singapore 659081");
		sessionStorage.setItem("7", "Rebecca,girl/face15.jpg,Status,1.431605,103.70990000000006,Had fun at Goat farm today!!,1310,10032014,Goat farm. 3 Lim Chu Kang Lane 4. 718859");
		sessionStorage.setItem("8", "Charlotte,girl/face13.jpg,Photo,1.299461,103.84465939999995,First Time trying 1 Market at Plaza Singapura. Not as good as expected. ,1932,09032014,1Market. Plaza Singapura. 60 Orchard Road. Singapore 238889,one_market_edit.jpg");
		sessionStorage.setItem("9", "Stella,girl/face17.jpg,Photo,1.299854,103.84981500000004,Hungry Chimps pasta is awesome. ,1910,07032014,Hungry Chimps. Prinsep Street Singapore,hungry_chimps.jpg");
		sessionStorage.setItem("10", "Rebecca,girl/face15.jpg,Photo,1.33352,103.74027699999999,Finally satisfied my cravings for Japanes Food at Sakae Sushi after school at Jcube! ,1532,07032014,Sakae Sushi. 2 Jurong East Central 1. JCube. Singapore 609731,sushi_edited.jpg");
		sessionStorage.setItem("11", "Stanley,boy/face3.jpg,Status,1.4300139,103.83634800000004,Watching The Lego Movie with clique at GV Yishun,1500,07032014,GV complex. Yishun Ten Complex. 51 Yishun Central 1. Singapore 768794");
		sessionStorage.setItem("12", "Renee,girl/face16.jpg,Status,1.31207,103.89390200000003,With my best friend having lunch at 112 Katong Singapore! Yummy! ,1400,07032014,112 Katong Singapore");
		sessionStorage.setItem("13", "Stanley,boy/face3.jpg,Status,1.3500414,103.84296599999993,Having my favourite thai food with Sharon at Jai Thai at! ,1330,07032014,Jai Thai. 7 Clover Way Singapore 579080");
		sessionStorage.setItem("14", "Rebecca,girl/face15.jpg,Events,1.3456156484551596,103.69520902633667,My birthday/My birthday at 819 Jurong West Street 81/1955/2315/17032014/Amanda/Delia/Alvin,1304,07032014,Home. 819 Jurong West Street 81. Singapore 640819");
		sessionStorage.setItem("15", "Stanley,boy/face3.jpg,Photo,1.28112,103.864189,Look at this nice flowers at Gardens by the bay!,1200,7032014,Gardens By The Bay. 18 Marina Gardens Drive. Singapore 018953,gardens_by_the_bay_edited.jpg");
		sessionStorage.setItem("16", "Rebecca,girl/face15.jpg,Photo,1.311318,103.815266,Relaxing and Peaceful Day at Singapore Botanic Garden with my friends! ,1030,07032014,Botanic Garden. 753 Tyersall Avenue. Singapore 257700,Botanic_Garden_edited.jpg");
		sessionStorage.setItem("17", "Johnny,boy/face2.jpg,Status,1.378431,103.950571,I can stay here all day all night at Pasir Risk Park,1205,06032014,Pasir Ris Park. 51 Pasir Ris Green. Singapore 518226");
		sessionStorage.setItem("18", "Stanley,boy/face3.jpg,Photo,1.3742993,103.75069529999996,Best Crab in Town at Master Crab Restaurant,2030,05032014,Mastercrab. 3 Choa Chu Kang Way. Singapore,master_crab-Copy.jpg");
		sessionStorage.setItem("19", "Stanley,boy/face3.jpg,Events,1.339215,103.70638200000008,Poly besties gathering/Poly Besties Gathering for Dinner to catch up at Jack Place at Jurong Point./1930/2300/15032014/Stacy/Rebecca/Billy,2000,05032014,Jack Place. Jurong Point. Jurong West Central 2");
		sessionStorage.setItem("20", "Rebecca,girl/face15.jpg,Photo,1.359469,103.88512889999993,Eating at new york new york at Heartland Mall,1840,05032014,New York New York. Heartland Mall 205 Hougang Street 21 Singapore,new_york-Copy.jpg")
		sessionStorage.setItem("21", "Stanley,boy/face3.jpg,Events,1.281098,103.84212500000001,Secondary School Class Gathering/The best time for us to gather and catch up at 49 seats cafe!/1800/2400/09032014/Billy/Rebecca/Renee/Victoria,2030,04032014,49 Seats. 49 Kreta Ayer Road. Singapore 089007");
		sessionStorage.setItem("22", "Stanley,boy/face3.jpg,Events,1.3007239,103.91188119999993,Cycling Event/Lets go for a night cycling at East Coast Park !/1800/2400/20032014/Jane/Rebecca/Vanny/Victoria,2030,03032014,East Coast Park Service Road. Singapore");
		sessionStorage.setItem("23", "Rebecca,girl/face15.jpg,Status,1.411458,103.96761600000002,Enjoying the sea breeze with my family at Pulau Ubin!,1920,27022014,Pulau Ubin. 224B Pulau Ubin. Singapore 508345");
		sessionStorage.setItem("24", "Renee,girl/face16.jpg,Status,1.3491551854167807,103.87235283851624,Dinner with Family at Nex Pizza Hut.,1950,19022014,Pizza hut. Nex. Upper Serangoon Road");
		sessionStorage.setItem("25", "Rebecca,girl/face15.jpg,Status,1.344233,103.68014199999993,Cannot wait for class to end so that I can meet my dear boyfriend after school! ,1145,16022014,Nanyang Technology University. 50 Nanyang Avenue Singapore 639798");
		sessionStorage.setItem("26", "Rebecca,girl/face15.jpg,Photo,1.2800945,103.85094909999998,Night cycling at Pasir Ris Park,2100,14022014,Pasir Risk Park,pasir_risk_park-edit.jpg");
		sessionStorage.setItem("27", "Rebecca,girl/face15.jpg,Photo,1.311699,103.79552699999999,Renee Birthday Celebration at Hatched cafe at Holland Village,1130,16022013,Holland Village. 267 Holland Avenue. Singapore 278989,Hatched_Collage-Copy.jpg");
		sessionStorage.setItem("28", "Javier,boy/face6.jpg,Photo,1.282531,103.85358199999996,had a wonderful dining experience here at Clifford restaurant,2042,15122013,Clifford Restaurant. Fullerton Hotel. 80 Collyer Quay Singapore 049326,clifford_edit.jpg");
		sessionStorage.setItem("29", "Stanley,boy/face3.jpg,Photo,1.352083,103.81983600000001,Dinner with Sharon at Aloya restaurant! ,2010,14122013,Aloya restaurant. Causeway Point Singapore,Capture.png");
		sessionStorage.setItem("30", "Billy,boy/face5.jpg,Events,1.32322,103.932762,4H Gathering/its been a long time that we met. Lets meet up at Ms Tan house guys! Please rsvp by 20th December and I can inform Ms Tan about it. See you!/1200/1500/22122014/Kenny/Julin/Julie/Eric,1514,13122013,Ms Tan House. 799 Bedok South Avenue 1. Singapore 469335");
		sessionStorage.setItem("31", "Alvin,boy/face8.jpg,Events,1.350181,103.74821,Christmas party/ Hey guys! It is the annual christmas celebration! Let's have a great catch-up with one another!(: Food and Drinks provided. Venue: Ian's house/1800/2300/25122014Roy/Vernica/Joseph,1140,10122013,Home. 621 Bukit Batok Central. Singapore 650621");
		sessionStorage.setItem("32", "Dave,boy/face9.jpg,Status,1.369017,103.84812199999999,Chilling with a cup of coffee at Coffee Bean. Love the coffee here,2030,07122013,Coffee Bean. Ang Mo Kio Hub. 53 Ang Mo Kio Avenue 3. 569933");
		sessionStorage.setItem("33", "Rebecca,girl/face15.jpg,Photo,1.256752,103.82033100000001,Spent my Sunday at SEA Aquarium.,1940,07122013,Resorts World Sentosa. 8 Sentosa Gateway Singapore 6577 8899,sea-aquarium-edit.jpg");
		sessionStorage.setItem("34", "Rebecca,girl/face15.jpg,Status,1.3555099,103.94523589999994,Love the pudding at paris baguette!,2100,05122013,Paris Baguette. Tampines Mall. 505 Tampines Central 1. Singapore");
		sessionStorage.setItem("35", "Rebecca,girl/face15.jpg,Status,1.299461,103.84465939999995,Cheap and Nice food buffet here at Cyrstal Jade at Plaza Sing. Worth trying!,2100,04122013,Crystal Jade. Plaza Singapura Orchard Road Singapore");
		sessionStorage.setItem("36", "Rebecca,girl/face15.jpg,Status,1.36194,103.88492700000006,Birthday celebration with Jane at Ice Edge Café!the pork ribs and gelato dessert are awesome!!!!,1410,04122013,Ice Edge Cafe. 2 Kovan Road. Singapore 548008");
		sessionStorage.setItem("37", "Rebecca,girl/face15.jpg,Status,1.3333130361811525,103.74017894268036,Birthday celebration with family at Big Mama restuarant at JCube!,2030,03122013,Big Mama restaurant. JCube. 2 Jurong East Central 1. Singapore 609731");
		sessionStorage.setItem("38", "Rebecca,girl/face15.jpg,Photo,1.2838552766437283,103.85937094688416,Special Christmas Buffet Dinner at Todai Restaurant! Really love the canberry turkey and fresh oyster and lobster here,2030,01122013,Todai. The Shoppes at Marina Bay Sands.12A Bayfront Avenue. Singapore 018970,todai_buffet.jpg");

	}
		//alert(sessionStorage.getItem("0"));
	  geocoder = new google.maps.Geocoder();
	  var myLatlng = new google.maps.LatLng(1.373846,104.435005);
	  var mapOptions = {
	    zoom: 10,
	    center: myLatlng,
	    disableDefaultUI: true,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	  }
	  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	  
	  
	  createMarkers(); 
	google.maps.event.addDomListener(window, 'load', initialize);
};

function openEvent(){
	$('#eventDetails').modal('show');
	return false;
}