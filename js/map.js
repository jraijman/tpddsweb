// Inicializar el mapa
var mymap = L.map('map').setView([-34.6037, -58.3816], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11', // Estilo del mapa (puedes cambiarlo)
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianJhaWptYW4iLCJhIjoiY2x2MmVzanMxMGY5YTJybjVmbXh5MW8weSJ9.NZEa7b9BPMe8znzHHNH8Tg' // Reemplaza con tu token de Mapbox
  }).addTo(mymap);

  // Define el icono de la heladera
  var heladeraIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/4151/4151152.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
  });

 // Array con datos de heladerías en Capital Federal
 var heladeras = [
  { nombre: "Heladera Uno", direccion: "Calle Falsa 123", latitud: -34.5965, longitud: -58.3753 },
  { nombre: "Heladera Dos", direccion: "Avenida Imaginaria 456", latitud: -34.6018, longitud: -58.3830 },
  { nombre: "Heladera Tres", direccion: "Calle Inventada 789", latitud: -34.6082, longitud: -58.3921 },
  { nombre: "Plaza de Mayo", direccion: "Calle Falsa 123", latitud: -34.5965, longitud: -58.3753 },
  { nombre: "Obelisco", direccion: "Avenida Imaginaria 456", latitud: -34.6018, longitud: -58.3830 },
  { nombre: "Puerto Madero", direccion: "Calle Inventada 789", latitud: -34.6082, longitud: -58.3921 },
  { nombre: "Teatro Colón", direccion: "Calle Corrientes 1234", latitud: -34.6037, longitud: -58.3816 },
  { nombre: "Recoleta", direccion: "Avenida Santa Fe 5678", latitud: -34.5895, longitud: -58.3974 },
  { nombre: "Florida", direccion: "Calle Florida 4321", latitud: -34.6030, longitud: -58.3772 },
  { nombre: "Congreso", direccion: "Avenida de Mayo 8765", latitud: -34.6090, longitud: -58.3838 },
  { nombre: "Lavalle", direccion: "Calle Lavalle 3456", latitud: -34.6039, longitud: -58.3810 },
  { nombre: "Belgrano", direccion: "Avenida Belgrano 123", latitud: -34.6118, longitud: -58.3845 },
  { nombre: "Rivadavia", direccion: "Calle Rivadavia 567", latitud: -34.6085, longitud: -58.3920 },
  { nombre: "Callao", direccion: "Avenida Callao 789", latitud: -34.6095, longitud: -58.3930 }
          
];

  heladeras.forEach(function(heladera) {
    var marker = L.marker([heladera.latitud, heladera.longitud], { icon: heladeraIcon }).addTo(mymap);
    var popupContent = "<b>" + heladera.nombre + "</b><br>" + heladera.direccion ;
    marker.bindPopup(popupContent);
});

