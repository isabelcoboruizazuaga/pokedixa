/*Mejora el ejercicio anterior dando al usuario las opciones para que pueda configurar el color de fondo, de párrafo y el tamaño de la letra.*/
window.onload=()=>{
    let logOut= document.getElementById("logout");
    btnRojo=document.getElementById("fRojo");
    btnAzul=document.getElementById("fAzul");
    btnMas=document.getElementById("masGrande");
    btnMenos=document.getElementById("maschico");

    logOut.addEventListener("click",cerrarSesion);
    btnRojo.addEventListener("click",fondoRojo);
    btnAzul.addEventListener("click",fondoAzul);
    btnMas.addEventListener("click",masGrande);
    btnMenos.addEventListener("click",masChico);


    checkCookie();
    checkFondo();
    masGrande();
}

function masGrande(){
    let size=getCookie("size");
    if(size!=""){
        let texto = document.getElementById("texto");
        size++;
        texto.style.fontSize = size +"px";  
        setCookie("size",size,0.00347222);
    }else{
        setCookie("size",25,0.00347222);
    }
}


function masChico(){
  let size=getCookie("size");
  if(size!=""){
      let texto = document.getElementById("texto");
      size--;
      texto.style.fontSize = size +"px";  
      setCookie("size",size,0.00347222);
  }else{
      setCookie("size",25,0.00347222);
  }
}

function fondoRojo(){
    setCookie("colorFondo","red",0.00347222);
    document.body.style.backgroundColor="red";
}


function fondoAzul(){
    setCookie("colorFondo","blue",0.00347222);
    document.body.style.backgroundColor="blue";
}

function checkFondo(){
    let color = getCookie("colorFondo");
    if (color != "") {
        if(color=="red"){
            document.body.style.backgroundColor="red";
        }else{
            document.body.style.backgroundColor="blue";
        }
    } else {      
        document.body.style.backgroundColor="green";
    }
}
function cerrarSesion(){
    setCookie("user","",0.00347222);    
    setCookie("colorFondo","",0.00347222);
}

function checkCookie() {
    let username = getCookie("user");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("user", username, 0.00347222);
        
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