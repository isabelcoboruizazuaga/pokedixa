
document.write("<table border='2'>");
for(let i=1;i<=10;i++){
    document.write("<tr width='30',heigth='30'>");
    document.write("<td>", i,"</td>");
    document.write("<td>", Math.sin(i),"</td>, </tr>");
}
document.write("</table>");