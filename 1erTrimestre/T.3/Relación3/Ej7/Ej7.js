
let cadena = "Imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau";
document.write(decode(cadena));

function decode(cadena) {
    cadena = cadena.replaceAll(" ", "");
    let longitud = cadena.length;
    let columnas = Math.ceil(Math.sqrt(longitud));
    let filas = Math.ceil(longitud / columnas);


    let cifradoMatriz = crearArrayVacio(filas, columnas);

    let contador = 0;
    for (let c = 0; c < columnas; c++) {
        for (let f = 0; f < filas; f++) {
            cifradoMatriz[f][c] = cadena[contador];
            contador++;
        }
    }


    let texto = "";
    for (let f = 0; f < filas; f++) {
        for (let c = 0; c < columnas; c++) {
            if (cifradoMatriz[f][c]) {
                texto += cifradoMatriz[f][c];
            } else {
                texto += "";
            }
        }

    }
    document.write(texto);
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