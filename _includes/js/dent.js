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

$(function() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-64969332-1', 'auto');
    ga('send', 'pageview');
    
    $('a').on('click', function() {
        var href = $(this).attr('href');
        if (href && href.indexOf("#") == 0) {
            href = href.substring(1);
        }
         
        ga('send', 'pageview', href);
    });
    
     $(window).on('unload', function() {  
        ga('send', 'pageview', "exit.html");
    });
    
});
