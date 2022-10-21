let screen = window.screen;
document.write("<table>");
for (let element in screen) {
    document.write("<tr> ");    
    document.write("<td>",element,"</td>");
    document.write("</tr>");
}

document.write("</table>");

