/**
 *                   +-------------------------+
                  ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
                  +----+----+----+----+-----¦
                  ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
                  +----+----+----+----+-----¦
                  ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
                  +----+----+----+----+-----¦
                  ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
                  +----+----+----+----+-----¦
                  ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
                  +-------------------------+
 */
let mapa = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
];

//Se empieza en 11= 00 y saco las coordenadas
let numIn=(mapa[0][0]).toString();
let x=numIn[0];
let y=numIn[1];

mostrarMapa();
seguirCoords(x,y)

function seguirCoords(x,y){
    let num=(mapa[x-1][y-1]).toString();
    let nx=num[0];
    let ny=num[1];

    document.write("I'm in (",x,",",y,") and the number is ",x,y,"<br>");

    //Si las viejas coordenadas son igual a las nuevas se acaba
    if(nx==x&&ny==y){
        document.write("The treasure is here!  (",x,",",y,")");
    }else{
        //Si no sigue buscando
        seguirCoords(nx,ny);
    }
}


function mostrarMapa(){
    document.write("<table border=2>");
    mapa.forEach(fila => {
        document.write("<tr>");
        fila.forEach(columna => {
            document.write("<td>");
            document.write(columna, " ");
            document.write("</td>");
        });
        document.write("</tr>");
    });
    document.write("</table>");
}