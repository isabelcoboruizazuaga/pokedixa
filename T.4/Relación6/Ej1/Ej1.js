/*Diseña una web que hará uso de cookies para guardar el nombre del usuario. En caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre del usuario y almacenarlo en una cookie que caducará en 5 minutos. Tras esto saludará al usuario mediante un mensaje en pantalla. En caso de tener ya creada la cookie deberá leerla y mostrar el mensaje anterior directamente. Deberá proporcionar también un enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión').*/
window.onload=()=>{
    let logOut= document.getElementById("logout");
    logOut.addEventListener("click",cerrarSesion);

    checkCookie()
}

function cerrarSesion(){
    setCookie("user","",5);
}

function checkCookie() {
    let username = getCookie("user");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("user", username, 365);
        
        alert("Welcome " + username);
      }
    }
  }

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }