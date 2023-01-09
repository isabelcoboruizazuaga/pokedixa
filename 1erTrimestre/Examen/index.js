function Exa5(cad_arg) {
    let caracteres = new Set(cad_arg);
    var diccionario = []
    let cadena="";

    //Por cada caracter único
    caracteres.forEach(letra => {
        //Se inicializa el contador a 0
        diccionario[letra] = 0;

        //Por cada caracter se recorre la cadena
        for (let i = 0; i < cad_arg.length; i++) {
            //Si el caracter está se suma a su contador
            if (cad_arg[i] == letra) {
                let contador = diccionario[letra];
                contador++;
                diccionario[letra] = contador;
            }
        }
        cadena=cadena+letra+":"+addPlus(diccionario[letra])+",";
    });
    return cadena;
}
function addPlus(num){
    let plus=""
    for (let i = 0; i < num; i++) {
        plus=plus+"+";        
    }
    return plus;
}

function findSubstring(cad_arg, substring) {
    let aparitions = "";
    let editedString = cad_arg;
    let aparition = 0;

    while (editedString.includes(substring)) {
        aparition = aparition + editedString.indexOf(substring);
        aparitions = aparitions + aparition + " ";
        editedString = editedString.substring(aparition + 1);

    }
    document.write(aparitions + "</br>");
    return aparitions;
}

function Exa6(...arrays) {
    let arraySumas = [];
    //recorremos el array de arrays
    for (let i = 0; i < arrays.length; i++) {
        //Extraemos la suma de cada array bidimensional        
        let sumaElementos = arrays[i][0] + arrays[i][1];
        arraySumas.push(sumaElementos);
    }
    //Se ordena el array con todas las sumas
    return arraySumas.reverse();
}


function mostrarArray(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

function Exa7(divId) {
    window.onload = () => {
        let div = document.getElementById(divId);
        div.style.fontSize = 12 + "px";
        div.style.color = "green";
        div.style.backgroundColor = "blue";
        div.style.fontFamily = "Comic Sans MS", "Comic Sans", cursive;
    }
}


window.onload = () => {
    let divis = document.getElementsByTagName("div");
    var diccionario = [];

    for (let i = 0; i < divis.length; i++) {
        //Se asigna el color aleatorio a cada divisor
        let color = changeColor(divis[i]);

        //Se crea un diccionario con los colores que equivaldra a los contadores
        diccionario[color] = 0;

        //Se les asigna el eventListener     
        divis[i].onclick = clicado;
    }



    function clicado(e) {
        let color = window.getComputedStyle(e.target, null).getPropertyValue('background-color');

        //Se incrementa el contador del elemento pulsado
        let contador = diccionario[color];
        contador++;
        diccionario[color] = contador;

        console.log("El div de color " + color + "ha sido clicado " + contador + " veces");
    }

    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }
    function changeColor(element) {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        element.style.backgroundColor = rndCol;
        return rndCol;
    }
}

