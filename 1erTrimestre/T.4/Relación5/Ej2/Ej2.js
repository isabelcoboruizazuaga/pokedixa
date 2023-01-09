/*Crea un formulario típico de registro para tu web.
 Debe contener al menos campos para introducir nombre,
  apellidos, DNI, Teléfono, email y nombre de usuario.
   Todos los campos son obligatorios, y debes validar 
   el mayor número posible de ellos haciendo uso de 
   expresiones regulares. El nombre de usuario debe 
   estar formado por al menos 8 caracteres, entre los 
   cuales debe aparecer obligatoriamente algún número y
    algún signo de puntuación.*/
window.onload = start;
function start() {
    let nom = document.getElementById("nombre");
    let apel = document.getElementById("apellidos");
    let dn = document.getElementById("DNI");
    let tel = document.getElementById("telefono");
    let ema = document.getElementById("email");
    let usu = document.getElementById("usuario");
    nom.addEventListener("input", validar);
    ema.addEventListener("input", validarCorreo);

    let nombre = "";
    function validar(e) {
        nombre += e.data;
        console.log(nombre);
    }
    let correo = "";
    function validarCorreo(e) {
        console.log(e.inputType);
        if (e.inputType == "insertText") {
            correo += e.data;
        }else{
            if(e.inputType == "deleteContentBackward"){
                if (correo != null && correo.length > 0) {
                    correo = correo.substring(0, correo.length - 1);
                }
            }
        }
        
        console.log(correo);
        const regex = new RegExp("^[^@]+@[^@]+\.[a-zA-Z]{2,}$");
        if (!regex.test(correo)) {
            e.target.style.border = " 1px solid red";
        } else {
            console.log("a");
            e.target.style.border = "0px";
        }

    }

    console.log(nombre);
}