window.onload=()=>{
    let httpRequest;
    document
      .getElementById("ajaxButton")
      .addEventListener("click", makeRequest);

    function makeRequest() {
      httpRequest = new XMLHttpRequest();

      httpRequest.onreadystatechange = tratarRespuesta;
      httpRequest.open("GET", "prueba.xml");
      httpRequest.send();
    }

    function tratarRespuesta() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          //alert(httpRequest.responseText);
          //let datosUser=JSON.parse(httpRequest.responseText)

          let datosUser=httpRequest.responseXML;
          document.body.innerHTML += datosUser.getElementsByTagName("nombre")[0].innerHTML;
        } else {
          alert("There was a problem with the request.");
        }
      }
    }
}
