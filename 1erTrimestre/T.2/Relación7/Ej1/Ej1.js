// Test if geolocation is available.
if(navigator.geolocation){  
    //navigator.geolocation.getCurrentPosition(muestraPosicion);

    //Improve your code so you show the position continuously
    navigator.geolocation.watchPosition(muestraPosicion);
}else {
  // If it isn't available, show a message for each and everyone of the possible errors.
  console.log("La localización no está disponible");
}
let x1,x2,y1,y2;
// If it's available, show the current position (latitude and longitude)
function muestraPosicion(position){
 
  console.log("Latitud: ", position.coords.latitude +
  "Longitud: " + position.coords.longitude);
}

function distanciaDosPuntos(x1,y1,x2,y2){
  let distancia =Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
  console.log("Distancia recorrida: ",distancia);
}

