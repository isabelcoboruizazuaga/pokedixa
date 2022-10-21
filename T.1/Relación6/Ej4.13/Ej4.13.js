
let columnas= parseInt(prompt("introduce las columnas"));
let altura= parseInt(prompt("introduce la altura de las celdas"));
let anchura= parseInt(prompt("introduce la anchura de las celdas"));

document.write("<table border='2' cellspacing='2'width='800'><tr border='2' height='",altura,"'>");

let contador=0;
while(contador<columnas){
    contador++;
    document.write("<td bgcolor='white' border= 2 width='",anchura,"'> &nbsp;</td>");
}
document.write("</tr></table>");
