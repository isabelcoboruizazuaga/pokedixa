/**7. Desarrolla una funci n que tomando como entrada una cadena de texto nosó
devuelva si es o no un pal ndromo. */

function format(cad_arg){
    let formattedString="";

    cad_arg=cad_arg.toLowerCase();
    arrayString= cad_arg.split(' ');

    for (let i = 0; i < arrayString.length; i++) {
        formattedString=formattedString+arrayString[i];        
    }
    return formattedString;
}

function invierteCadena(cad_arg){
    cad_arg=format(cad_arg)
    let nuevaCadena="";
    for(let i=cad_arg.length;i>0;i--){
        let chara=cad_arg.charAt(i-1);
        nuevaCadena= nuevaCadena + chara;
    }
    return nuevaCadena;
}

function isPalindrome(cad_arg){
    if(invierteCadena(cad_arg)==format(cad_arg)){
        document.write("Es palíndromo <br/>");
        return true;
    }else{
        document.write("No es palíndromo <br/>")
        return false;
    }

}


isPalindrome("Ana");
isPalindrome("Cacerola sarten olla");
isPalindrome("Acaso hubo buhos aca");