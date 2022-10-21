/**6. Implementa una funci n que tomando dos cadenas como entrada nos diga si laó
segunda es una subcadena de la primera y cu l es la primera posici n a partir deá ó
la que esto ocurre. */

function isSubstring(cad_arg1,cad_arg2){
    if(cad_arg1.includes(cad_arg2)){
        return(cad_arg1.indexOf(cad_arg2));        
    }else return("No es una subcadena")

}

document.write(isSubstring("hola paco","a p")+"<br/>");
document.write(isSubstring("cara papa","pa")+"<br/>");
document.write(isSubstring("cara papa","paco")+"<br/>");
