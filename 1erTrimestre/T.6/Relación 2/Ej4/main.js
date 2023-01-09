window.onload =()=>{

    let comprob= document.getElementById("compro");
    comprob.addEventListener("click",makeRequest);
    
}

function comprobar(){
    /*let usu= document.getElementById("usuario");
    texto=usu.value;
    console.log(texto);*/


}

function makeRequest() {
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = tratarRespuesta;
    httpRequest.open("GET", "index.php");
    httpRequest.send();
  }

  function tratarRespuesta() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.responseText);

        } else {
        alert("There was a problem with the request.");
      }
    }
  }