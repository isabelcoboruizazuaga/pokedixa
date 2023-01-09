/**
 * 2. Definir una funci n que muestre informaci n sobre una cadena de texto que seó ó
le pasa como argumento. A partir de la cadena que se le pasa, la funci nó
determina si esa cadena est formada s lo por may sculas, s lo por min sculas oá ó ú ó ú
por una mezcla de ambas
 */
//65 a 90
// 97 al 122
function stringInformation(cad_arg){
    let mayus=false;
    let minus=false;
    let info;
    for (let i = 0; i < cad_arg.length; i++) {
        let charCode= cad_arg.charCodeAt(i);
        if(charCode>=97 && charCode<=122){
            minus=true;
        }else{
            if( charCode>=65 && charCode<=90){
                mayus=true;
            }
        }        
    }
    if(mayus && minus){
        info= "ambas";
    }else{
        if(mayus){
            info="mayúsculas";
        }else{info="minúsculas"}
    }
    document.write("La frase contiene "+info+"</br>");
    return(info);
}

stringInformation("solo tengo minusculas");
stringInformation("SOLO TENGO MAYUSCULAS");
stringInformation("Tengo ambas mezCladas");