
let cadena = "If man was meant to stay on the ground god would have given us roots";
document.write(code(cadena));

function code(cadena) {
    
    cadena = cadena.replaceAll(" ", "");

    let longitud = cadena.length;
    let columnas = Math.ceil(Math.sqrt(longitud)); 
    let filas = Math.ceil(longitud / columnas); 

    let cifradoMatriz = crearArrayVacio(filas, columnas);

    //Primer rectángulo
    let contador = 0;
    for (let f = 0; f < filas; f++) {
        for (let c = 0; c < columnas; c++) {
            let char = cadena[contador];
            if (char) {
                cifradoMatriz[f][c] = char;
            } else {

                cifradoMatriz[f][c] = " ";
            }

            contador++;
        }
    }

    //Formar palabras con rectangulo invertido
    let texto = "";
    for (let c = 0; c < columnas; c++) {
        for (let f = 0; f < filas; f++) {
            texto += cifradoMatriz[f][c]
        }
        texto += " ";

    }
    return texto;
}

function crearArrayVacio(filas, columnas) {
    let array = [];
    for (var y = 0; y < filas; y++) {
        array[y] = [];
        for (var x = 0; x < columnas; x++) {
            array[y][x] = " ";
        }
    }
    return array;
}
