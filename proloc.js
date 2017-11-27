mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmdhbHRpc3dobyIsImEiOiJjajNyZjl3eDYwMWJiMnBvNmlnd3pjcWJqIn0.b-03hU-DxQF21JQC7v5j8g';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/johngaltiswho/cjahzms2p9f5c2ro2u3yp796s',
  center: [77.5946, 12.9716 ],
  zoom: 7
});

var popup = new mapboxgl.Popup({
    offset: [0, -15],
    closeButton: false
});


map.on('mousemove', function(e) {
  var features = map.queryRenderedFeatures(e.point, { layers: ['aacp-project-information']});
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
