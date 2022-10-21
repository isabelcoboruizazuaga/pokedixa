
function esPar(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }}

let anchura= parseInt(prompt("introduce la anchura de las celdas"));

document.write("<table border='2' cellspacing='2'>");

for(let fila=1;fila<9;fila++){
    document.write("<tr border='2' height='",anchura,"'>")
    for(let columna=1;columna<9;columna++){
        if(!esPar(fila)&&!esPar(columna)) document.write("<td bgcolor='black' border= 2 width='",anchura,"'> &nbsp;</td>");
        if(!esPar(fila)&&esPar(columna)) document.write("<td bgcolor='white' border= 2 width='",anchura,"'> &nbsp;</td>");
        if(esPar(fila)&&esPar(columna)) document.write("<td bgcolor='black' border= 2 width='",anchura,"'> &nbsp;</td>");
        if(esPar(fila)&&!esPar(columna)) document.write("<td bgcolor='white' border= 2 width='",anchura,"'> &nbsp;</td>");
    }
    
    document.write("</tr>")
}

document.write("</table>");