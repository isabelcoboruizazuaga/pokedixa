/**3. Realizar un funci n que permita localizar todas las apariciones de una subcadenaó
dentro de otra. */

function findSubstring(cad_arg,substring){
    let aparitions="";
    let editedString= cad_arg;
    let aparition=0;
            
    while (editedString.includes(substring)){
        aparition= aparition +editedString.indexOf(substring);
        aparitions=aparitions+aparition+" ";    
        editedString= editedString.substring(aparition+1);
        
    }
    document.write(aparitions+"</br>");
    return aparitions;
}

findSubstring("gato o perro o perro o pez o perro",'perro');
findSubstring("gato o perro o perro o pez o perro o gato",'gato');
findSubstring("gato o perro o perro o pez o perro",'pez');