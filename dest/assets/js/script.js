var navItem = document.querySelectorAll('.js-nav-item');
var body = document.getElementById('body');

/* initiate leaflet map
var mymap = L.map('map').setView([-33.429055, -70.621262], 17);
var marker = L.marker([-33.429055, -70.621262]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaGFyZGNvZGVwdW5rIiwiYSI6ImNqdWFjdWY3MDAxYmIzeWw0bjlzaW80cmUifQ.3HAer8K3D-7fu29uIPPfVA', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);*/

/* open mobile menu when clicking on mobile nav icon
document.getElementById('js-toggle-mobile-nav').onclick = function() {
  body.classList.toggle('open-menu');
};*/

for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function(event) {

    /*if (body.classList.contains('open-menu')) {
      body.classList.remove('open-menu');
    }*/

    //get href of nav element and scroll to its section
    var idDestination = this.getAttribute("href").substring(1, this.length);
    var destination = document.getElementById(idDestination);
    destination.scrollIntoView({behavior: "smooth"});

    event.preventDefault();
  })
};

/* scroll when clicking the introduction arrow
document.getElementById('js-start-scrolling').onclick = function() {
  document.getElementById('services').scrollIntoView({behavior: "smooth"});
};*/

// keeptrack
document.addEventListener("DOMContentLoaded", function() {
  var header = document.getElementById('header');
  var waypointInit = new KeepTrack(header);
});
