let navigator = window.navigator;
document.write("<table>");

for (let element in navigator) {
    document.write("<tr> ");
    
    document.write("<td>",navigator.getGamepads(),"</td>");   
    
    document.write("<td>",element,"</td>");     

    document.write("</tr>");
}

document.write("</table>");

