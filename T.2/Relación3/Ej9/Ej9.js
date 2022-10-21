/**Escribir un procedimiento que lea una palabra y la escriba (formateada dentro de
una tabla) como se ve en la figura:
Entrada: HOLA
Salida:
H O L A
O     L
L     O
A L O H */
function invierteCadena(cad_arg){
    let nuevaCadena="";
    for(let i=cad_arg.length;i>0;i--){
        let chara=cad_arg.charAt(i-1);
        nuevaCadena= nuevaCadena + chara;
    }
    return nuevaCadena;
}

let palabra="CABALLO";
let invertida=invierteCadena(palabra);

document.write("<table>");

for (let fila = 0; fila < palabra.length; fila++) {
    document.write("<tr>");
    if(fila==0){
        //primera
        for (let columnas = 0; columnas < palabra.length; columnas++) {
            document.write("<td>",palabra.charAt(columnas),"</td>");
        }
    }else{
        if(fila==(palabra.length-1)){
            //ultima            
            for (let columnas = 0; columnas < palabra.length; columnas++) {
                document.write("<td>",invertida.charAt(columnas),"</td>");
            }
        }else{
            //medio                        
            for (let columnas = 0; columnas < palabra.length; columnas++) {
                if(columnas==0){
                    //primera
                    document.write("<td>",palabra.charAt(fila),"</td>");
                }else{
                    if(columnas==(palabra.length)-1){
                        //ultima
                        document.write("<td>",invertida.charAt(fila),"</td>");
                    }else{
                        //medio
                        document.write("<td>"," ","</td>");
                    }
                }
            }
        }
    }
    document.write("</tr>");
    
}
document.write("</table>");