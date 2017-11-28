mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmdhbHRpc3dobyIsImEiOiJjajNyZjl3eDYwMWJiMnBvNmlnd3pjcWJqIn0.b-03hU-DxQF21JQC7v5j8g';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/johngaltiswho/cjahzms2p9f5c2ro2u3yp796s',
  center: [77.5946, 12.9716 ],
  zoom: 9
});

var popup = new mapboxgl.Popup({
    offset: [0, -15],
    closeButton: false
});


map.on('mousemove', function(e) {
  var features = map.queryRenderedFeatures(e.point, { layers: ['aacp-project-information']});
  //buildProjectLocations('aacp-project-information');
  map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

  if (!features.length) {
    popup.remove();
    return;
  }
  var feature = features[0];
  popup.setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.Title + '</h3><p>' + feature.properties.Description + '</p>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});

function buildProjectLocations(data) {
  // Iterate through the list of stores
  for (i = 0; i < data.features.length; i++) {
    var currentFeature = data.features[i];
    var prop = currentFeature.properties;
    // Select the listing container in the HTML and append a div
    // with the class 'item' for each store
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = 'listing-' + i;

    // Create a new link with the class 'title' for each store
    // and fill it with the store address
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.dataPosition = i;
    link.innerHTML = prop.address;

    // Create a new div with the class 'details' for each store
    // and fill it with the city and phone number
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.city;
    if (prop.phone) {
      details.innerHTML += ' &middot; ' + prop.phoneFormatted;
    }
  }
}
