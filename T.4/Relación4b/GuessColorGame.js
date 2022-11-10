window.onload =()=>{
    const divs = document.getElementsByClassName("color");
    let casillaCorrecta = genCorrecto(divs.length);
    let btn=document.querySelector("button");
    let solucion;
    cargarColores();

    const newColors = document.getElementById("newColors");
    newColors.addEventListener('click', cargarColores);

    function cargarColores() {        
    btn.style.visibility = "hidden";
        //Se asignan los colores y los event listener a las casillas
        for (let i = 0; i < divs.length; i++) {
            const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            divs[i].style.backgroundColor = rndCol;

            if (i + 1 == casillaCorrecta) {
                solucion = rndCol;
            }

            divs[i].addEventListener('click', click);
        }
    //Se coloca la solución en el enunciado
    document.querySelector("h1").innerHTML = solucion;
    }


    //Función del event, determina si se gana
    function click(e) {
        if (e.target.id == casillaCorrecta) {
            casillaCorrecta = genCorrecto(divs.length);
            document.querySelector("p").style.visibility = "visible";
            document.querySelector("p").innerHTML = "HAS GANADO";
            
            btn.style.visibility = "visible";
            btn.addEventListener('click',restart);

        } else {
            e.target.style.backgroundColor = "black";
        }
    }

    function restart(){        
        document.querySelector("p").style.visibility = "hidden";
        cargarColores();
    }


    //Generación de números aleatorios
    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }
    function genCorrecto(number) {
        return Math.floor(Math.random() * (number) + 1);
    }

}