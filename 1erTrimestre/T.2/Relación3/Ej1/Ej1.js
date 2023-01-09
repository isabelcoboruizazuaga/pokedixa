/**
 * Crea las siguientes funciones y ll malas desde una p gina XHTML para mostrará á
su funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
cadena.
c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada
devuelve la longitud de la palabra m s larga en ella contenidaá
d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un
valor num rico (i), devuelva el n mero de palabras cuya longitud es mayor a i.é ú
e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
de tal modo que s lo aparece en may scula la primera letra y el resto enó ú
min scula
 */
function invierteCadena(cad_arg){
    let nuevaCadena="";
    for(let i=cad_arg.length;i>0;i--){
        let chara=cad_arg.charAt(i-1);
        nuevaCadena= nuevaCadena + chara;
    }
    document.write(nuevaCadena,"<br>");
    return nuevaCadena;
}
invierteCadena("hola");

function inviertePalabras(cad_arg){
    let nuevaCadena="";
    let words= cad_arg.split(' ');

    for(let i=words.length;i>0;i--){
        nuevaCadena=nuevaCadena +words[i-1]+" ";
    }
    
    document.write(nuevaCadena,"<br>");
    return nuevaCadena;
}
inviertePalabras("El perro del hortelano");

function encuentraPalabraMasLarga(cad_arg){
    let longestWord="";
    let word;

    let words= cad_arg.split(' ');    

    for(let i=0;i<words.length;i++){
        word= words[i];
        if(word.length>longestWord.length){
            longestWord=word;
        }
    }
    document.write(longestWord +"</br>");
    return longestWord;
}
encuentraPalabraMasLarga("el perro del hortelano");

function fltraPalabrasMasLargas(cad_arg, num){
    let longerWords="";
    let word;
    let words=cad_arg.split(' ');

    for(let i=0;i<words.length;i++){
        word= words[i];
        if(word.length>num){
            longerWords= longerWords+word+" "
        }
    }
    document.write(longerWords,"<br>");
    return longerWords;
}
fltraPalabrasMasLargas("Una palabra más corta que las otras es",3);

function cadenaBienFormada(cad_arg){
    let nuevaCadena="";
    cad_arg=cad_arg.toLowerCase();
    let firstChar=(cad_arg.charAt(0)).toUpperCase();
    
    for (let i = 0; i < cad_arg.length; i++) {
        if(i==0){
            nuevaCadena=nuevaCadena+firstChar;
        }else{
            nuevaCadena=nuevaCadena+cad_arg.charAt(i);
        }        
    }
    document.write(nuevaCadena);
    return nuevaCadena;
}
cadenaBienFormada("hOla MUnDo");