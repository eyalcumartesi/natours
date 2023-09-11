/*eslint-disable*/
export const displayMap = (locations) => {
  mapboxgl.accessToken =
  'pk.eyJ1IjoiZXlhbGN1bWFydGVzaTA5IiwiYSI6ImNsbHVteDBjOTFnMXY0b3BzYW1zbHQxOXYifQ.7gi8ZlX8N3dpfI6d8PyfjQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/eyalcumartesi09/cllunkzzb00cz01pb92wi54z1',
  scrollZoom: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  const el = document.createElement('div');
  el.className = 'marker';

  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  new mapboxgl.Popup({
    offset: 40
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}<p>`)
    .addTo(map);

  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100
  }
});

}

