var infowindow;
var geocoder;
var map;
window.onload=function(){
	var sessionState = sessionStorage.getItem("0");
	var sessionStateSplit = sessionState.split(",");

	if(sessionStateSplit.length==2){
		sessionStorage.clear();
		
		sessionStorage.setItem("0", sessionStateSplit[0]+",home,20"); //3 types of status: home, profile, filter
		if(sessionStateSplit[0]=="twitter"){
			sessionStorage.setItem("1", "Dave,boy/face9.jpg,Status,1.341621,103.776156,Eating kaya toast and soft-boiled eggs for my breakfast! Love this combi!,0945,25032014");
			sessionStorage.setItem("2", "Alvin,boy/face8.jpg,Photo,1.2862989,103.85921689999998,Great musical concert! Love it. You guys must catch this wonderful musical!,2055,24032014,musical edit.jpg");
			sessionStorage.setItem("3", "Joseph,boy/face1.jpg,Photo,1.435855,103.786222,This lunch costs me $9.90 nett only! Gotta bring my family here next time,1320,23032014,990lunch - Copy.jpg");
			sessionStorage.setItem("4", "Stanley,boy/face3.jpg,Status,1.254187,103.823279,had a great day at USS! Gotta come here another time!,1823,22032014");
			sessionStorage.setItem("5", "Johnny,boy/face2.jpg,Photo,1.412975,103.82963300000006,Love coming to Bottle Tree for family outings,1054,21032014,bottle tree - Copy.jpg");
			sessionStorage.setItem("6", "Murphy,boy/face4.jpg,Photo,1.279608,103.869874,Had a great time spent with my lovely family,1819,20032014,Marina Barrage edited.jpg");
			sessionStorage.setItem("7", "Joseph,boy/face1.jpg,Photo,1.332875,103.95900389999997,Going to buy my new laptop!,1718,14032014,comexit edited.jpg");
			sessionStorage.setItem("8", "Billy,boy/face5.jpg,Status,1.334938,103.74687199999994,Celebrating dad's birthday with great food sponsored by mum! Happy birthday dad!,1030,20022014");
			sessionStorage.setItem("9", "Wilson,boy/face7.jpg,Status,1.3023579,103.87644499999999,Love their in-door ice skating facilities!,1716,18022014");
			sessionStorage.setItem("10", "Rebecca,girl/face15.jpg,Photo,1.36194,103.88492700000006,Out with my bestie to Ice Edge Café!,1410,17022014,ice edge - Copy.jpg");
			sessionStorage.setItem("11", "Rebecca,girl/face15.jpg,Status,1.352299,103.943857,First Time trying Manhattan Fish Market and the food here is awesome. Love it! ,1525,16022014");
			sessionStorage.setItem("12", "Rebecca,girl/face15.jpg,Status,1.2993889,103.847398,Love their waffles and tea!,1525,17022014");
			sessionStorage.setItem("13", "Rebecca,girl/face15.jpg,Status,1.28526,103.829337,Like Korean Food? Join me at Big Mama Korean Resturant! ,2010,14022014");
			sessionStorage.setItem("14", "Rebecca,girl/face15.jpg,Status,1.364548,103.86637389999999,Love Chomp Chomp food!,2100,10022014");
			sessionStorage.setItem("15", "Rebecca,girl/face15.jpg,Status,1.3006139,103.84510449999993,Long Queue at Plaza Singapura 4 Fingers Crispy Chicken! But it's worth waiting because the food is nice! ,1807,21022013");
			sessionStorage.setItem("16", "Rebecca,girl/face15.jpg,Status,1.3023411,103.83647050000002,Wild Honey is a really very fantastic place. I went with family. Loved food as well as services.,1900,20022013");
			sessionStorage.setItem("17", "Rebecca,girl/face15.jpg,Photo,1.2807961,103.84579229999997,Cafehopping Stop 2! - Le Chocolat Café - Awesome Rainbow Cake! ,1817,16022013,cake edited.jpg");
			sessionStorage.setItem("18", "Rebecca,girl/face15.jpg,Photo,1.326623,103.85283099999992,Finally made my way to Wheeler's Yard on Valnetine's Day! Cafehopping Stop 1 ! ,1630,15022013,coffee edited.jpg");
			sessionStorage.setItem("19", "Rebecca,girl/face15.jpg,Photo,1.3087174,103.81798249999997,New cafe on valentine! Food for thought,1230,14022013,food for thought - Copy.jpg");
			sessionStorage.setItem("20", "Rebecca,girl/face15.jpg,Photo,1.2906199,103.8380267,Love their valentine set meal,1530,14022013,kith cafe - Copy.jpg");

		}else if(sessionStateSplit[0]=="instagram"){
			sessionStorage.setItem("1", "Renee,girl/face16.jpg,Photo,1.331903,103.938952,Dinner at Bedok 85! Yummy Bar Chor Mee!,2041,15032014,bar chor mee edited.jpg");
			sessionStorage.setItem("2", "Johnny,boy/face2.jpg,Photo,1.254347,103.823242,having so much fun at USS,2004,15032014,photo-edit.jpg");
			sessionStorage.setItem("3", "Rebecca,girl/face15.jpg,Photo,1.3007239,103.91188119999993,Watching sunset with my dearest Mr. Donavan! ,1825,14032014,east coast - Copy.jpg");
			sessionStorage.setItem("4", "Delia,girl/face14.jpg,Photo,1.4237758,103.84074069999997,Long queue but food here is very affordable. Mostly are priced between S$6-$12,1546,11032014,pin si - edit.jpg");
			sessionStorage.setItem("5", "Renee,girl/face16.jpg,Photo,1.361641,103.885948,Out with my bestie to Lola's Café!,1410,10032014,lola cafe - edit.jpg");
			sessionStorage.setItem("6", "Stanley,boy/face3.jpg,Photo,1.325641,103.72497999999996,Look at my scores!,1932,09032014,bowling edit.jpg");
			sessionStorage.setItem("7", "Murphy,boy/face4.jpg,Photo,1.415119,103.89897199999996,Love this buffet spread,1706,07032014,buffet edited.jpg");
			sessionStorage.setItem("8", "Joseph,boy/face1.jpg,Photo,1.3297412984957184,103.75720024108887,Look at my delicious lunch!,1200,27022014,marche edited.jpg");
			sessionStorage.setItem("9", "Wilson,boy/face7.jpg,Photo,1.24517,103.827905,Celebrating our 4th anniversary. Recommend this restaurant Moonstone to you guys! They have the best service and food here!,2230,25022014,Capture1 - Copy.JPG");
			sessionStorage.setItem("10", "Rebecca,girl/face15.jpg,Photo,1.3784307,103.95057139999994,Night cycling at Pasir Ris Park,2100,14022014,pasir risk park - edit.jpg");
			sessionStorage.setItem("11", "Amanda,girl/face11.jpg,Photo,1.281098,103.84212500000001,Chilling with Rebecca at 49 Seats! ,1713,13022014,49 seats-edit.jpg");
			sessionStorage.setItem("12", "Stephen,boy/face10.jpg,Photo,1.3369629,103.77921400000002,Lunch after school at McDonald,1401,10022013,kap mcdonald - edit.jpg");
			sessionStorage.setItem("13", "Stephen,boy/face10.jpg,Photo,1.332875,103.95900389999997,Bought my new running shoes at Sports Fair,1830,07022013,shoes - edit.jpg");
			sessionStorage.setItem("14", "Rebecca,girl/face15.jpg,Photo,1.311699,103.79552699999999,Renee Birthday Celebration at Hatched,1130,05022013,Hatched Collage - Copy.jpg");
			sessionStorage.setItem("15", "Amanda,girl/face11.jpg,Photo,1.306842,103.78844000000004,Took a day off to shop for our travel stuffs! ,1015,01022013,Inside-The-star - Copy.jpg");
			sessionStorage.setItem("16", "Dave,boy/face9.jpg,Photo,1.29943,103.847422,Chilling at Professor Brawn Cafe,1655,10122013,professor - Copy.jpg");
			sessionStorage.setItem("17", "Alvin,boy/face8.jpg,Photo,1.374183,103.932748,Shopping at Ikea for my new room!,1450,10122013,ikea - Copy.jpg");
			sessionStorage.setItem("18", "Stephen,boy/face10.jpg,Photo,1.3742993,103.75069529999996,Best Crab in Town at Master Crab,2030,07122013,master crab - Copy.jpg");
			sessionStorage.setItem("19", "Bernice,girl/face12.jpg,Photo,1.410939,103.84369100000004,Playing Golf with my family. Love this kind of family outing!,1230,06122013,golf course - Copy.jpg");
			sessionStorage.setItem("20", "Stephen,boy/face10.jpg,Photo,1.4035561399589391,103.78729462623596,First Time at Night Safari! Enjoy it so much!,2130,05122013,night safari - Copy.jpg");

		}else{
			sessionStorage.setItem("1", "Stanley,boy/face3.jpg.jpg,Photo,1.3050905124228618,103.90330670921003,Best Laksa in Singapore!,2054,16032014,laksa edit.jpg");
			sessionStorage.setItem("2", "Rebecca,girl/face15.jpg,Status,1.32108,103.70520899999997,Came to bird park with besties!,1730,15032014");
			sessionStorage.setItem("3", "Rebecca,girl/face15.jpg,Photo,1.3726607973019693,103.89390975236893,Came to fish manhatten!love it!,1730,15032014,fish - Copy.jpg");
			sessionStorage.setItem("4", "Rebecca,girl/face15.jpg,Photo,1.3652169,103.86526200000003,eating udders ice cream at serngoon garden vilage!,2030,15032014,ice cream - Copy.jpg");
			sessionStorage.setItem("5", "Rebecca,girl/face15.jpg,Photo,1.3007239,103.91188119999993,Watching sunset with my dearest Mr. Donavan! ,1825,14032014,east coast - Copy.jpg");
			sessionStorage.setItem("6", "Stanley,boy/face3.jpg,Status,1.359667,103.75222800000006,The facilities here are DAEBAK! I will definitely come here next time!,1810,10032014");
			sessionStorage.setItem("7", "Rebecca,girl/face15.jpg,Status,1.431605,103.70990000000006,Had fun at Goat farm today!!,1310,10032014");
			sessionStorage.setItem("8", "Charlotte,girl/face13.jpg,Photo,1.299461,103.84465939999995,First Time trying 1 Market at Plaza Singapura. Not as good as expected. ,1932,09032014,one market edit.jpg");
			sessionStorage.setItem("9", "Stella,girl/face17.jpg,Photo,1.331626,103.84941000000003,First Time trying Tim Ho Wan in Singapore! Food is average though. ,1910,07032014,tim ho wan edit.jpg");
			sessionStorage.setItem("10", "Rebecca,girl/face15.jpg,Photo,1.435855,103.78622199999995,Finally satisfied my cravings for Japanes Food at Sakae Sushi after school! ,1532,07032014,sushi edited.jpg");
			sessionStorage.setItem("11", "Stanley,boy/face3.jpg,Status,1.4300139,103.83634800000004,Watching The Lego Movie with clique,1500,07032014");
			sessionStorage.setItem("12", "Renee,girl/face16.jpg,Status,1.31207,103.89390200000003,With my best friend having lunch at 112 Katong Singapore! Yummy! ,1400,07032014");
			sessionStorage.setItem("13", "Stanley,boy/face3.jpg,Status,1.3500414,103.84296599999993,Having my favourite thai food with Sharon at Jai Thai! ,1330,07032014");
			sessionStorage.setItem("14", "Rebecca,girl/face15.jpg,Events,1.299451,103.847698,Movie Date!/This event is created to bring all movie lovers together!/1955/2315/27042014/Amanda/Delia/Alvin,1314,07032014");
			sessionStorage.setItem("15", "Stanley,boy/face3.jpg,Photo,1.28112,103.864189,Look at this nice flowers!,1200,7032014,gardens by the bay edited.jpg");
			sessionStorage.setItem("16", "Rebecca,girl/face15.jpg,Photo,1.311318,103.815266,Relaxing and Peaceful Day at Singapore Botanic Garden with my friends! ,1030,07032014,Botanic Garden edited.jpg");
			sessionStorage.setItem("17", "Johnny,boy/face2.jpg,Status,1.378431,103.950571,I can stay here all day all night,1205,06032014");
			sessionStorage.setItem("18", "Stanley,boy/face3.jpg,Photo,1.3742993,103.75069529999996,Best Crab in Town at Master Crab,2030,05032014,master crab - Copy.jpg");
			sessionStorage.setItem("19", "Stanley,boy/face3.jpg,Events,1.339215,103.70638200000008,Poly besties gathering/Poly Besties Gathering for Dinner to catch up./1930/2300/15032014/Stacy/Rebecca/Billy,2000,05032014");
			sessionStorage.setItem("20", "Rebecca,girl/face15.jpg,Photo,1.359469,103.88512889999993,Eating at new york new york,1840,05032014,new york - Copy.jpg")
			sessionStorage.setItem("21", "Stanley,boy/face3.jpg,Events,1.281098,103.84212500000001,Secondary School Class Gathering/The best time for us to gather and catch up!/1800/2400/09032014/Billy/Rebecca/Renee/Victoria,2030,04032014");
			sessionStorage.setItem("22", "Stanley,boy/face3.jpg,Events,1.3007239,103.91188119999993,Cycling Event/Lets go for a night cycling!/1800/2400/20032014/Jane/Rebecca/Vanny/Victoria,2030,03032014");
			sessionStorage.setItem("23", "Rebecca,girl/face15.jpg,Status,1.411458,103.96761600000002,Enjoying the sea breeze with my family!,1920,27022014");
			sessionStorage.setItem("24", "Renee,girl/face16.jpg,Status,1.3491551854167807,103.87235283851624,Dinner with Family at Nex Pizza Hut.,1950,19022014");
			sessionStorage.setItem("25", "Rebecca,girl/face15.jpg,Status,1.344233,103.68014199999993,Cannot wait for class to end so that I can meet my dear boyfriend after school! ,1145,16022014");
			sessionStorage.setItem("26", "Rebecca,girl/face15.jpg,Photo,1.2800945,103.85094909999998,Night cycling at Pasir Ris Park,2100,14022014,pasir risk park - edit.jpg");
			sessionStorage.setItem("27", "Rebecca,girl/face15.jpg,Photo,1.311699,103.79552699999999,Renee Birthday Celebration at Hatched,1130,16022013,Hatched Collage - Copy.jpg");
			sessionStorage.setItem("28", "Javier,boy/face6.jpg,Photo,1.282531,103.85358199999996,had a wonderful dining experience here,2042,15122013,clifford edit.jpg");
			sessionStorage.setItem("29", "Stanley,boy/face3.jpg,Photo,1.299854,103.849815,Dinner with Sharon ! ,2010,14122013,Capture.PNG");
			sessionStorage.setItem("30", "Billy,boy/face5.jpg,Event,1.32322,103.932762,4H Gathering/its been a long time that we met. Lets meet up at Ms Tan house guys! Please rsvp by 20th December and I can inform Ms Tan about it. See you!/1200/1500/22122014/Kenny/Julin/Julie/Eric,1514,13122013");
			sessionStorage.setItem("31", "Alvin,boy/face8.jpg,Event,1.350181,103.74821,Christmas party/ Hey guys! It is the annual christmas celebration! Let's have a great catch-up with one another!(: Food and Drinks provided. Venue: Ian's house/1800/2300/25122014Roy/Vernica/Joseph,1140,10122013");
			sessionStorage.setItem("32", "Dave,boy/face9.jpg,Status,1.369017,103.84812199999999,Chilling with a cup of coffee. Love the coffee here,2030,07122013");
			sessionStorage.setItem("33", "Rebecca,girl/face15.jpg,Photo,1.256752,103.82033100000001,Spent my Sunday at SEA Aquarium.,1940,07122013,sea-aquarium - edit.jpg");
			sessionStorage.setItem("34", "Rebecca,girl/face15.jpg,Status,1.3073704,103.88422289999994,Awesome Black Pepper Crab here!,2100,06122013");
			sessionStorage.setItem("35", "Rebecca,girl/face15.jpg,Status,1.3555099,103.94523589999994,Love the pudding at paris baguette!,2100,05122014");
			sessionStorage.setItem("36", "Rebecca,girl/face15.jpg,Status,1.299461,103.84465939999995,Cheap and Nice food buffet here. Worth trying!,2100,04122014");
			sessionStorage.setItem("37", "Rebecca,girl/face15.jpg,Status,1.36194,103.88492700000006,Birthday celebration with Jane at Ice Edge Café!,1410,04122014");
			sessionStorage.setItem("38", "Rebecca,girl/face15.jpg,Status,1.3333130361811525,103.74017894268036,Birthday celebration with family at JCube!,2030,03122014");

		}
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