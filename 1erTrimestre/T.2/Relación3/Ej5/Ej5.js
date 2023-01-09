/**5. Desarrolla una funci n que elimine los caracteres repetidos de una cadena deó
texto, incluidos los blancos. */

function outReps(cad_arg){
    newString = Array.from(new Set(cad_arg)).toString();
    document.write(newString);
}

outReps("no hay mas de una a ni n");