/**8. Implementa una funci n que tomando como entrada una cadena de texto seaó
capaz de contabilizar el n mero de palabras. Ten en cuenta que entre dos palabrasú
puede haber m s de 1 blanco, e incluso pueden aparecer al principio o final deá
sta. */

function countWords(cad_arg){
    cad_arg=cad_arg.trim();

    let formattedString='';
    let count=0;
    let arrayString= cad_arg.split(' ');

    for (let i = 0; i < arrayString.length; i++) {
        if(arrayString[i]!=''){
            count++;
        }      
    }
    
    document.write(count,"<br/>");
    return count;
}
countWords("    hola     soy una pà la                   bra       "); //6
countWords(" una    dos    tres cuatro   cinco     seis    7"); //7