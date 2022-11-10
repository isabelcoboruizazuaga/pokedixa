window.onload=()=>{
    btnRojo=document.getElementById("rojo");
    btnAzul=document.getElementById("azul");

    btnRojo.addEventListener("click",fondoRojo);
    btnAzul.addEventListener("click",fondoAzul);

    /*let color=getCookie("colorFondo");

    if(color){
        document.body.style.background=color;
    }*/
}

function fondoRojo(){
    setCookie("colorFondo","red",15);
    
    document.body.style.background="red";
}

function fondoAzul(){    
    setCookie("colorFondo","blue",15);
    document.body.style.background="blue";
}
/*
if (getCookie("colorFondo")){
    console.log(getCookie("colorFondo"));
}else{
document.cookie= "colorFondo=red";
}

setCookie("nombre","Isa",0)*/
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