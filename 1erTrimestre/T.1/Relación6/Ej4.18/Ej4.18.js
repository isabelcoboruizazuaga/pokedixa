
let columnas= parseInt(prompt("introduce las columnas"));
let filas= parseInt(prompt("introduce las filas"));
let altura= parseInt(prompt("introduce la altura de las celdas"));
let anchura= parseInt(prompt("introduce la anchura de las celdas"));

document.write("<table border='2' cellspacing='2'width='800'>");

for(let i=0;i<filas;i++){
    document.write("<tr border='2' height='",altura,"'>")
    for(let j=0;j<columnas;j++){
        document.write("<td bgcolor='white' border= 2 width='",anchura,"'> &nbsp;</td>");
    }    
    document.write("</tr>")
}

document.write("</table>")
