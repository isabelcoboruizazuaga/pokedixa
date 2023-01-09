/*
Develop a function wich be able to create a random treasure
hunt like the previous one. As arguments it will recibe the
dimensions of the array (at least 5x5) and must return a valid
treasure hunt array
*/

let mapa = [[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0]
];

function getRandom() {
    return (Math.floor(Math.random() * (6 - 1) + 1));
}
let numIniX = getRandom();
let numIniY = getRandom();
//Solución colocada
mapa[numIniX - 1][numIniY - 1] = numIniX + "" + numIniY;


/**
 * Genera una posición para un número dado
 * @param {*} numAntX 
 * @param {*} numAntY 
 */
function nuevaPos(numAntX, numAntY) {
    //Se crea una posición random que no esté ocupada
    let posInX;
    let posInY;
    do {
        posInX = getRandom();
        posInY = getRandom();
    } while (mapa[posInX - 1][posInY - 1] != 0)

    //Se asigna el número a la posición random
    mapa[posInX - 1][posInY - 1] = numAntX + "" + numAntY;

    //si la posición es 0,0 se detiene, si no se sigue generando
    if(!(posInX-1==0 && posInY-1==0)){
        nuevaPos(posInX,posInY);
    }

}

//Generamos la solución
nuevaPos(numIniX,numIniY);

//Se rellena con números aleatorios
for (let fila = 0; fila < mapa.length; fila++) {
    for (let columna = 0; columna < mapa.length; columna++) {
        if(mapa[fila][columna]==0){
           mapa[fila][columna]=Math.floor(Math.random() * 55 + 1);
        }       
        
    }
    
}

//Se muestra la tabla
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
