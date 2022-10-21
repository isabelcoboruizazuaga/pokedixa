
let columnas= parseInt(prompt("introduce las columnas"));
let altura= parseInt(prompt("introduce la altura de las celdas"));
let anchura= parseInt(prompt("introduce la anchura de las celdas"));

document.write("<table border='2' cellspacing='2'width='800'><tr border='2' height='",altura,"'>");

for(let i=0;i<columnas;i++){
    if((i+1)%2){        
        document.write("<td bgcolor='black' border= 2 width='",anchura,"'> &nbsp;</td>");
    }else{
        document.write("<td style='background-color='white' border= 2 width='",anchura,"'> &nbsp;</td>");

    }
}
document.write("</tr></table>")
