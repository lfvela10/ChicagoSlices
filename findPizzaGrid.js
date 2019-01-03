var center = [-87.652359, 41.878369];
var popupHolder;
var time = new Date();



//document.getElementsByClassName('test');
// map itself
mapboxgl.accessToken = 'pk.eyJ1IjoibHVpc3ZlZWUzIiwiYSI6ImNqbmRwdzlqYjA4ZWsza21wdTUzMGI1djUifQ.PwoQ17sL8eNPLspZbPwNqQ';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/luisveee3/cjnjqwp5s71d72snzs7xg5nal',
center: center,
zoom: 10
});

// motion set to baccis since it is the first item on the accordion list
function myFunction() {
  
    map.flyTo({
        center: [
            -87.662583,
            41.869095 ],
        zoom: 15,
        
         speed: 0.3, // make the flying slow
        curve: 4
    });
    BacciPopup.addTo(map);
}



// Marker variables
var pequodsLinlconPark = document.createElement('div');
  pequodsLinlconPark.className = 'marker';
var homeSlice = document.createElement('div');
  homeSlice.className = 'marker';
var DinicosBerwyn = document.createElement('div1');
  DinicosBerwyn.className = 'marker';
var FornoRossoWestLoop = document.createElement('div1');
  FornoRossoWestLoop.className = 'marker';
var Positanos = document.createElement('div1');
  Positanos.className = 'marker';
var GiordanosOrland = document.createElement('div1');
  GiordanosOrland.className = 'marker';
var PizzaNovaPulaski= document.createElement('div1');
  PizzaNovaPulaski.className = 'marker';
var BacciOnTaylor= document.createElement('div1');
  BacciOnTaylor.className = 'marker';
var Spaccanopoli= document.createElement('div1');
  Spaccanopoli.className = 'marker';
var Dimos= document.createElement('div1');
  Dimos.className = 'marker';
var PaisansBrookfield= document.createElement('div1');
  PaisansBrookfield.className = 'marker';
var SliceFactoryOakPark= document.createElement('div1');
  SliceFactoryOakPark.className = 'marker';

// pop up variables
var pequodsPopup = new mapboxgl.Popup({ offset: 25 })
   .setHTML('<h2>Pequods Pizza</h2><p>Check out this family owned pizza place. It&#39;s made the "Chicago&#39;s best" list a time or two. <br><br> 2207 N. Clybourn Ave Chicago IL 60614 (773) 327-1512 <br> <br><a href=\" https://pequodspizza.com/chicago\" target=\"_blank\" title=\"Opens in a new window\">PequodsPizza.com</a></p>');

var homeSlicePopup = new mapboxgl.Popup({ offset: 25 })
   .setHTML('<h2>Homeslice</h2><p>Imaginative thin-crust pizzas & beer in a rustic-style lodge room with tree-trunk tables & TVs. <br><br>938 W Webster Ave, Chicago, IL 60614  (312) 789-4600 <br><br> <a href=\" http://www.getsomehomie.com\" target=\"_blank\" title=\"Opens in a new window\">getsomehomie.com</a></p>');

var DinicosBerwynPopup = new mapboxgl.Popup({ offset: 25 })
   .setHTML('<h2>Di Nico&#39;s Pizza</h2><p>A wide variery of pizzas by the slice, even deep dish! Get a slice for $5. <br><br>6627 W. Roosevelt Rd. Berwyn,IL  708-749-9900 <br><br> <a href=\" http://www.dinicospizza.com\" target=\"_blank\" title=\"Opens in a new window\">dinicospizza.com</a></p>');

var PositanosPopup = new mapboxgl.Popup({ offset: 25 })
   .setHTML('<h2>Positanos Pizza</h2><p>Hands down, the best pizza in the city. The entire pie is thick and crunchy, especially the crust. The sauce tastes of fresh tomatoes and the toppings are served in hefty portions. Pick up a slice, fries, and a can of pop for $6.<br><br> 4312 W 55th St. Chicago IL, 60632 <br><br>773-284-7745  <br><br> <a href=\" http://www.positanospizza.com\" target=\"_blank\" title=\"Opens in a new window\">positanospizza.com</a></p>');

  var GiordanosPopup = new mapboxgl.Popup({ offset: 25 })
   .setHTML('<h2>Giordano&#39;s Pizza</h2><p>My favorite amongst the chains here in Chicago. Give it a try!<br><br>4325 South La Grange Road, Orland Park, IL 60462 <br>(708) 349-7500  <br><br> <a href=\" http://www.giordanos.com\" target=\"_blank\" title=\"Opens in a new window\">giordanos.com</a></p>');

  var FornoRossoPopup = new mapboxgl.Popup({ offset: 25 })
   .setHTML('<h2>Forno Rosso</h2><p>This neapolitan pizza restaurant in the loop is my favorite amonst this particular type of pizza. The pie itself is thin and made with fresh ingridients. The crust is fluffy and flaky. <br><br>1048 W Randolph St, Chicago, IL 60607<br><br>(312) 243-6000 <br><br> <a href=\" http://www.fornorossopizzeria.com\" target=\"_blank\" title=\"Opens in a new window\">fornorossopizzeria.com</a></p>');  

  var BacciPopup = new mapboxgl.Popup({ offset: 25 })
   .setHTML('<h2>Bacci&#39;s Pizza</h2><p>Try their ricotta cheese stuffed deep dish slice. <br>10% off if you present a UIC student ID. <br><br>2301 W Taylor St, Chicago, IL 60612<br><br> (312) 455-9000<br><br> <a href=\" http://www.baccipizza.com\" target=\"_blank\" title=\"Opens in a new window\">baccipizza.com</a></p>');  

 var SpaccanopoliPopup = new mapboxgl.Popup({ offset: 25 })
   .setHTML('<h2>Spacca Napoli</h2><p>A hidden gem in Ravenswood. They serve up neapolitan pizza style pizza.<br><br>769 W Sunnyside Ave, Chicago, IL 60640<br><br>(773) 878-2420<br><br> <a href=\" http://www.spaccanapolipizzeria.com\" target=\"_blank\" title=\"Opens in a new window\">spaccanapoli.com</a></p>');  

var DimosPopup = new mapboxgl.Popup({ offset: 25 })
   .setHTML('<h2>Dimo&#39;s Pizza</h2><p>Creatively topped slices. The ingridients are picked from their rooftop garden.<br><br>1615 N Damen Ave, Chicago, IL 60647<br><br>(773) 525-4580<br><br> <a href=\" http://www.dimospizza.com\" target=\"_blank\" title=\"Opens in a new window\">dimospizza.com</a></p>');  
    







//pequods
var pequodsMarker = new mapboxgl.Marker(pequodsLinlconPark)
  .setLngLat([-87.6644, 41.9219])
  .setPopup(pequodsPopup)
  .addTo(map);

//homeslice
var homeSliceMarker = new mapboxgl.Marker(homeSlice)
  .setLngLat([-87.6524, 41.9219])
  .setPopup(homeSlicePopup)
  .addTo(map);

//dinicos berwyn
var DinicosBerwynMarker = new mapboxgl.Marker(DinicosBerwyn)
  .setLngLat([-87.793203, 41.864514])
  .setPopup(DinicosBerwynPopup)
  .addTo(map);

var PositanosMarker = new mapboxgl.Marker(Positanos)
  .setLngLat([-87.7311, 41.7932])
  .setPopup(PositanosPopup)
  .addTo(map);

var GiordanosOrland = new mapboxgl.Marker(GiordanosOrland)
  .setLngLat([-87.8533, 41.6293])
  .setPopup(GiordanosPopup)
  .addTo(map);

//forno rosso
var FornoRossoWestLoopMarker = new mapboxgl.Marker(FornoRossoWestLoop)
  .setLngLat([-87.6541, 41.8846])
  .setPopup(FornoRossoPopup)
  .addTo(map);

var BacciOnTaylorMarker = new mapboxgl.Marker(BacciOnTaylor)
  .setLngLat([-87.662583, 41.869095])
  .setPopup(BacciPopup)
  .addTo(map);

var SpaccanopoliMarker = new mapboxgl.Marker(Spaccanopoli)
  .setLngLat([-87.674362, 41.963345])
  .setPopup(SpaccanopoliPopup)
  .addTo(map);

var DimosMarker = new mapboxgl.Marker(Dimos)
  .setLngLat([-87.677143, 41.911048])
  .setPopup(DimosPopup)
  .addTo(map);


/* creates ID attributes and attaches them to the marker code within mapbox
   this allows me to make us of the actual marker handled by mapbox and extend
   its functionality to work with the accordion menu */

var dimosID = document.createAttribute("id");       
dimosID.value = "dimoMarkerID";  
DimosMarker.getElement().setAttributeNode(dimosID); 

var bacciID = document.createAttribute("id");       
bacciID.value = "bacciMarkerID";  
BacciOnTaylorMarker.getElement().setAttributeNode(bacciID); 

var dinicosID = document.createAttribute("id");       
dinicosID.value = "dinicosMarkerID";  
DinicosBerwynMarker.getElement().setAttributeNode(dinicosID); 

var fornoRossoID = document.createAttribute("id");       
fornoRossoID.value = "fornoRossoMarkerID";  
FornoRossoWestLoopMarker.getElement().setAttributeNode(fornoRossoID); 

var giordanosID = document.createAttribute("id");       
giordanosID.value = "giordanosMarkerID";  
GiordanosOrland.getElement().setAttributeNode(giordanosID);

var homesliceID = document.createAttribute("id");       
homesliceID.value = "homesliceMarkerID";  
homeSliceMarker.getElement().setAttributeNode(homesliceID); 

var pequodsID = document.createAttribute("id");       
pequodsID.value = "pequodsMarkerID";  
pequodsMarker.getElement().setAttributeNode(pequodsID);

var positanosID = document.createAttribute("id");       
positanosID.value = "positanosMarkerID";  
PositanosMarker.getElement().setAttributeNode(positanosID); 

var spaccaID = document.createAttribute("id");       
spaccaID.value = "spaccaMarkerID";  
SpaccanopoliMarker.getElement().setAttributeNode(spaccaID); 





// triggers an update to the accordion when a marker is clicked
$("#dimoMarkerID").click(function(){
    $(document).ready(function(){
    $('#dimos').trigger('click');
});
    });

$("#bacciMarkerID").click(function(){
    $(document).ready(function(){
    $('#bacci').trigger('click');
});
    });

$("#dinicosMarkerID").click(function(){
    $(document).ready(function(){
    $('#dinicos').trigger('click');
});
    });

$("#fornoRossoMarkerID").click(function(){
    $(document).ready(function(){
    $('#fornoRosso').trigger('click');
});
    });

$("#giordanosOrland").click(function(){
    $(document).ready(function(){
    $('#giordanos').trigger('click');
});
    });

$("#homesliceMarkerID").click(function(){
    $(document).ready(function(){
    $('#homeSlice').trigger('click');
});
    });

$("#pequodsMarkerID").click(function(){
    $(document).ready(function(){
    $('#pequods').trigger('click'); 
});
     pequodsPopup.addTo(map);
    });

$("#positanosMarkerID").click(function(){
    $(document).ready(function(){
    $('#positanos').trigger('click');
});
    });

$("#spaccaMarkerID").click(function(){
    $(document).ready(function(){
    $('#spacca').trigger('click');
});
    });

// click functions that triggered by the div elements by id
// this handles the accordion
$("#pequods").click(function(){
    center = pequodsMarker.getLngLat();
    removeOpenPopups();
    setFlight(center);
    pequodsPopup.addTo(map);
  });

$("#bacci").click(function(){
    center = BacciOnTaylorMarker.getLngLat();
    setFlight(center);
    removeOpenPopups();
    BacciPopup.addTo(map);
  });
      
$("#dimos").click(function(){
    center = DimosMarker.getLngLat();
    removeOpenPopups();
    setFlight(center);
    DimosPopup.addTo(map);
  });

$("#dinicos").click(function(){
    center = DinicosBerwynMarker.getLngLat();
    removeOpenPopups();
    setFlight(center);
    DinicosBerwynPopup.addTo(map);
  });

$("#fornoRosso").click(function(){
    center = FornoRossoWestLoopMarker.getLngLat();
    removeOpenPopups();
    setFlight(center);
    FornoRossoPopup.addTo(map);
  });

$("#giordanos").click(function(){
    center = GiordanosOrland.getLngLat();
    removeOpenPopups();
    setFlight(center);
    GiordanosPopup.addTo(map);
  });

$("#homeSlice").click(function(){
   center = homeSliceMarker.getLngLat();
   removeOpenPopups();
    setFlight(center);
    homeSlicePopup.addTo(map);
    
  });

$("#positanos").click(function(){
    center = PositanosMarker.getLngLat();
    removeOpenPopups();
    setFlight(center);
    PositanosPopup.addTo(map);
  });

$("#spacca").click(function(){
    center = SpaccanopoliMarker.getLngLat();
    removeOpenPopups();
    setFlight(center);
    SpaccanopoliPopup.addTo(map);
  });


// closes all open popups
function removeOpenPopups()
{
 
    BacciPopup.remove();
    DimosPopup.remove();
    DinicosBerwynPopup.remove();
    FornoRossoPopup.remove();
    GiordanosPopup.remove();
    homeSlicePopup.remove();
    PositanosPopup.remove();
    SpaccanopoliPopup.remove();
    pequodsPopup.remove();
 
}

// function created to move map gracefully to place selected in the accordion menu
function setFlight(flightDestination)
{
     map.flyTo({
        center: flightDestination,
        zoom: 17,
        
         speed: 0.3, // make the flying slow
        curve: 4
    });
    
}

// accordion script from jquery
$(function() {
    $( "#accordion" ).accordion();
  } );