// define globals

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!

  // Grab all data from end pt via ajax
  // Generate all the element base on the coordinate

  function info_template(info){
  	return 	`
  				  <p>${info}</p>			  
  				`
  };

  var features = "";
  var $info_div = $('#info');
  var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

  $.ajax({
  	type: "GET",
  	url: weekly_quakes_endpoint
  })
  .then(function(response){
  	// template them
  	// append in our div
  	// qCounts number of earthquake
  	//console.log(response);
  	features = response.features;
  	// var qCounts = response.metadata.count;
  	// // get title of individual earthquake
  	// var k = 0;
  	// var title = response.features[k].properties.title;
  	// var longitudes = response.features[k].geometry.coordinates[0];
  	// var latitudes = response.features[k].geometry.coordinates[1];
  	// var hours = Math.floor(Math.floor(Math.floor((response.features[k].properties.time/1000)/60)/60)/24);

  	//console.log(hours);

  	// show the list of earthquakes by titles
  	features.forEach(function(feas){
  		//console.log(feas.properties.title);
  		// append here
  		$info_div.append(info_template(feas.properties.title));
  	});
  	// for(var i =0; i < data.length; i++){
  	// 	var newHTML = gifTemplate(data[i].images.fixed_width.url);
  	// 	$grid.append(newHTML);
  	// }



  var map;
  initMap();
  // Will probably  have give parameters of lat, lng, 
  // dropMarker(37.78,-122.44);
  // loop through the data list, for each long and lang
  // pass in a their long and lang to the function
  // console.log(feas.properties.title);
  // append here

  //features[0].geometry.coordinates[0] // long
  //features[0].geometry.coordinates[1] // lat
  
  //dropMarker(features[0].geometry.coordinates[1],features[0].geometry.coordinates[0]);
  //dropMarker(37.78, -122.44);
  //dropMarker(54.2563,169.2627);
  console.log(features.length);
  for(var i =0; i< features.length; i++){
  	dropMarker(features[i].geometry.coordinates[1],features[i].geometry.coordinates[0]);
  }


  })
  .catch(function(err){
  	// the error case
  	console.log(err);
  });

  // features.forEach(function(feas){
  // 	for(var i =0; i <feas.geometry)
  	
  // });

  function initMap() {
    	map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.78, lng: -122.44},
      zoom: 8
    });
  };

  function dropMarker(latitudes,longitudes){
  	var marker = new google.maps.Marker({
  		position: {lat: latitudes, lng: longitudes},
  		map : map,
  		icon: 'images/earthquake_copy.png',
  		title: 'New Pin'
  	});
  };



});
