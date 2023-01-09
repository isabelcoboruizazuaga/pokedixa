/**
 * Write a program to search for the "saddle points" in a
 *  5 by 5 array of integers. A saddle point is a cell whose 
 * value is greater than or equal to any in its row, and less 
 * than or equal to any in its column. There may be more than 
 * one saddle point in the array. Print out the coordinates of 
 * any saddle points your program finds. Print out "No saddle points"
 *  if there are none.
 *  
 */
let mapa = [
    [4, 10, 6, 4, 3],
    [4, 11, 9, 0, 0],
    [7, 12, 7, 9, 9],
    [3, 13, 8, 1, 0],
    [0, 14, 9, 0, 0]
];

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
function crearMapa() {
    //Se rellena con números aleatorios
    for (let fila = 0; fila < mapa.length; fila++) {
        for (let columna = 0; columna < mapa.length; columna++) {
            mapa[fila][columna] = Math.floor(Math.random() * 55 + 1);

        }

    }
}

function isSaddle(x,y){
    let num= mapa[x][y]; //[0][0]=1
    let c1Cumple = true;
    let c2Cumple = true;

    //Se recorre la fila donde se encuentra el numero (x)
    for (let celda = 0; celda < 5; celda++) {
        //Si no es el mayor no cumple
        if(num<mapa[x][celda]){
            c1Cumple=false;
        }        
    }
    
    //Igual con la columna
    for (let celda = 0; celda < 5; celda++) {
        //Si no es el menor no cumple
        if(num>mapa[celda][y]){
            c2Cumple=false;
        }        
    }
    if (c1Cumple && c2Cumple) {
        return true;
    } else {
        return false;
    }
}


//crearMapa();
mostrarMapa();


let saddle=false;
for (let fila = 0; fila < mapa.length; fila++) {
    for (let columna = 0; columna < mapa.length; columna++) {
        if (isSaddle(fila, columna)) {
            document.write("<br/>", mapa[fila][columna], " is a saddle point");
            saddle=true;
        }
    }

}
if(!saddle) document.write("There's no saddle points");