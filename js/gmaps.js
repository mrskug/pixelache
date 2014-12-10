$( document ).on( "pagecreate", "#map-page", function() {
    console.log("#map-page loaded...");
		var helsinki = new google.maps.LatLng(60.1708, 24.9375);

		map = new google.maps.Map(document.getElementById('map-canvas'), {
			center: helsinki,
			zoom: 15
		});

		layer = new google.maps.FusionTablesLayer({
			query: {
  			select: 'Location',
  			from: '1iwWKdhdFqU-rePhSnRmtOEMvjTQI3rwEinxUWMpL'
			}
		});
		layer.setMap(map);
});