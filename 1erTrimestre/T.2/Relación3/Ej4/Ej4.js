/**4. Crea una funci n que tomando una cadena de texto como entrada coloque todasó
sus consonantes al principio y todas sus vocales al final de la misma, eliminando
los blancos. */
//97,101,105,111,117
//95

function disorganice(cad_arg){
    let loweCasedString=cad_arg.toLowerCase();
    let resultingString="";
    let beginingOfString="";
    let endOfString="";

    for (let i = 0; i < cad_arg.length; i++) {
        let char=loweCasedString.charCodeAt(i);
        
        //
        if(char==97||char==101||char==105||char==111||char==117){
            beginingOfString= beginingOfString+cad_arg.charAt(i);
        }else{            
            if(char!=32){                
                endOfString= endOfString+cad_arg.charAt(i);
            }
        }        
    }
    resultingString=beginingOfString+endOfString;
    document.write(resultingString+"<br>");
    return resultingString;
}

disorganice("hola soy paco");
disorganice("paco soy hola");

document.write(" ".charCodeAt(0));
