$(function() {
    var initialize = function() {
        var myLatlng = new google.maps.LatLng(44.424100, 26.120148);
        var mapCanvas = document.getElementById('map-canvas');
        if (!mapCanvas) {
            return;
        }
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          scrollwheel: false,
          draggable : false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Cabinet Stomatologic INODent'
        });
    };
    google.maps.event.addDomListener(window, 'load', initialize);
});

