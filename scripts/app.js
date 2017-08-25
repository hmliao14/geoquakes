// define globals

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!

  // Grab all data from end pt via ajax
  // Generate all the element base on the coordinate

  var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

  $.ajax({
  	type: "GET",
  	url: weekly_quakes_endpoint
  })
  .then(function(response){
  	// template them
  	// append in our div
  	// qCounts number of earthquake
  	console.log(response);
  	var features = response.features;
  	var qCounts = response.metadata.count;
  	// get title of individual earthquake
  	var k = 0;
  	var title = response.features[k].properties.title;
  	var longitudes = response.features[k].geometry.coordinates[0];
  	var latitudes = response.features[k].geometry.coordinates[1];
  	var hours = Math.floor(Math.floor(Math.floor((response.features[k].properties.time/1000)/60)/60)/24);

  	console.log(hours);

  	features.forEach(function(feas){
  		console.log(feas.properties.title);
  	});


  	// for(var i =0; i < data.length; i++){
  	// 	var newHTML = gifTemplate(data[i].images.fixed_width.url);
  	// 	$grid.append(newHTML);
  	// }

  })
  .catch(function(err){
  	// the error case
  	console.log(err);
  });


});
