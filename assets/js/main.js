
// This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat:37.983810, lng:23.727539},
  zoom:13
  });
  const categorySelect = document.getElementById('category-select');

  const country = 'greece';
  const city = 'athens';

  categorySelect.addEventListener('change', (event) => {
  console.log(event.target.value);
  });
  $('hotel').click(function(){
    var results = 'lodging';
  });
} 