mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmdhbHRpc3dobyIsImEiOiJjajNyZjl3eDYwMWJiMnBvNmlnd3pjcWJqIn0.b-03hU-DxQF21JQC7v5j8g';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/johngaltiswho/cja9pkbuj1qeb2sro7a3i7aei',
  center: [77.5946, 12.9716 ],
  zoom: 4
});

map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['aacp-project-information'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.Title + '</h3><p>' + feature.properties.Description + '</p>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});
