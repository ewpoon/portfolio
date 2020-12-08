function initMap() {
  // The location of Uluru
  const uluru = { lat: 42.289456189328014, lng: -83.71715344465325};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
