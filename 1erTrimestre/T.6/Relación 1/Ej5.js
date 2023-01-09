/**
 * Crea una web que funcione como un cliente de correo electrónico. Para ello
supongamos que en tu servidor dispones de un script que conforme se recibe un
correo, éste se escribe en un fichero XML. Por tanto:
• Define el formato de fichero XML que te permita simular esta situación (correos
electrónicos).
• Crea la web con la interfaz necesaria para que periodicamente actualice la lista de
correos.
 */

window.onload=()=>{
    let httpRequest;
    document
      .getElementById("ajaxButton")
      .addEventListener("click", makeRequest);

    function makeRequest() {
      httpRequest = new XMLHttpRequest();

      httpRequest.onreadystatechange = tratarRespuesta;
      httpRequest.open("GET", "correos.xml");
      httpRequest.send();
    }

    function tratarRespuesta() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {

          let datosUser=httpRequest.responseXML;
          document.body.innerHTML += datosUser.getElementsByTagName("correo")[0].innerHTML;
        } else {
          alert("There was a problem with the request.");
        }
      }
    }

}
