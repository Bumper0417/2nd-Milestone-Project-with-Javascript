
// This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = {'country': 'gr'};
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_red';
var hostnameRegexp = new RegExp('^https?://.+?/');

var countries = {
    'au': {
      center: {lat: -25.3, lng: 133.8},
      zoom: 4
    },
    'br': {
      center: {lat: -14.2, lng: -51.9},
      zoom: 3
    },
    'ca': {
      center: {lat: 62, lng: -110.0},
      zoom: 3
    },
    'fr': {
      center: {lat: 46.2, lng: 2.2},
      zoom: 5
    },
    'de': {
      center: {lat: 51.2, lng: 10.4},
      zoom: 5
    },
    'mx': {
      center: {lat: 23.6, lng: -102.5},
      zoom: 4
    },
    'nz': {
      center: {lat: -40.9, lng: 174.9},
      zoom: 5
    },
    'it': {
      center: {lat: 41.9, lng: 12.6},
      zoom: 5
    },
    'za': {
      center: {lat: -30.6, lng: 22.9},
      zoom: 5
    },
    'es': {
      center: {lat: 40.5, lng: -3.7},
      zoom: 5
    },
    'pt': {
      center: {lat: 39.4, lng: -8.2},
      zoom: 6
    },
    'us': {
      center: {lat: 37.1, lng: -95.7},
      zoom: 3
    },
    'uk': {
      center: {lat: 54.8, lng: -4.6},
      zoom: 5
    }
  };


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat:37.983810, lng:23.727539},
  zoom:13
  });
  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });
  const categorySelect = document.getElementById('category-select');


  categorySelect.addEventListener('change', (event) => {
  console.log(event.target.value);
  });
  
  // Create the autocomplete object and associate it with the UI input control.
  // Restrict the search to the default country, and to place type "cities".
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */ (
      document.getElementById('autocomplete')), {
        types : ['(cities)'],
        componentRestrictions : countryRestrict
    });
    
    places = new google.maps.places.PlacesService(map);
    
    autocomplete.addListener('place_changed', onPlaceChanged);
    getElementById('country').addEventListener('change', onPlaceChanged);
    
    //Add a dom event listener to react when a user selects a country
    document.getElementById('country').addEventListener('change', setAutocompleteCountry);
} 

function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(16);
    search();
  }else {
    document.getElementById('autocomplete').placeholder = "Enter a city";
  }
}

// Search for hotels in the selected city, within the viewport of the map.

function search() {
  var search = {
    bounds : map.getBounds(),
    types : ['lodging']
  };
  places.nearbySearch(search, function(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();
      // Create a marker for each hotel found, and
     // assign a letter of the alphabetic to each marker icon.
     for (var i = 0; i < results.length; i++) {
      var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
      var markerIcon = MARKER_PATH + markerLetter + '.png';
      // Use marker animation to drop the icons incrementally on the map.
      markers[i] = new google.maps.Marker({
        position: results[i].geometry.location,
        animation: google.maps.Animation.DROP,
        icon: markerIcon
      });
      // If the user clicks a hotel marker, show the details of that hotel
      // in an info window.
      markers[i].placeResult = results[i];
      google.maps.event.addListener(markers[i], 'click', showInfoWindow);
      setTimeout(dropMarker(i), i * 100);
      addResult(results[i], i);
     }
    }
  });
}