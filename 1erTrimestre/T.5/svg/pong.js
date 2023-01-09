var bola, poX, poY, direccionX, direccionY, velocidadx, velocidady, radio;
var p1, pp1y, p2, pp2y, direccionP1Y, direccionP2Y;
var puntos1, puntos2;
var juego;

window.onload = () => {
    bola = document.getElementById("ball");
    p1 = document.getElementById("p1");
    p2 = document.getElementById("p2");

    puntos1 = document.getElementById("p1Points");
    puntos2 = document.getElementById("p2Points");

    document.addEventListener("keypress", jugarP1);

    newGame();
    // crearBolas();
}
function colision() {
    if (((poY >= pp1y) && (poY <= (pp1y + p1Height)) && ((poX - radio) <= p1Width))) {
        return true;
    }
    if (((poY > pp2y) && (poY < (pp2y + p2Height)))) {
        if ((poX + radio) > pp2x) {
            return true;
        }
    }
}
/*
function moverP1() {

    if (pp1y >= 0 && pp1y <= eWidth) {
        pp1y += velocidady * direccionP1Y
    }
    p1.setAttribute("y", pp1y);
}*/
function jugarP1(e) {
    var bajaP1, subeP1;
    let key = e.key;
    /*if (key == "w" || key == "s") {
        switch (key) {
            case "w":
                direccionP1Y *= -1;
                clearInterval(bajaP1);
                subeP1 = setInterval(moverP1, 30);
                break;
            case "s":
                direccionP1Y *= +1;
                clearInterval(subeP1);
                bajaP1 = setInterval(moverP1, 30);
                break;
        }

    }*/
    switch (key) {
        case "w":
            if (pp1y > 0) {
                pp1y -= vBarra;
            }
            p1.setAttribute("y", pp1y);
            break;
        case "s":
            if ((pp1y + p1Height) < eHeight) {
                pp1y += vBarra;
            }
            p1.setAttribute("y", pp1y);
            break;
        case "8":
            if (pp2y > 0) {
                pp2y -= vBarra;
            }
            p2.setAttribute("y", pp2y);
            break;
        case "2":
            if ((pp2y + p2Height) < eHeight) {
                pp2y += vBarra;
            }
            p2.setAttribute("y", pp2y);
            break;
    }
}
function newGame() {
    /**
        * Escenario
        */
    eWidth = 800;
    eHeight = 400;


    /**
     * Bola
     */
    poX = eWidth/2;
    poY = eHeight/2;
    radio = 20;
    direccionX = 1;
    direccionY = 1;
    velocidadx = 5;
    velocidady = 7;

    /**
     * Rect
     */
    direccionP1Y = 1;
    direccionP2Y = 1;
    vBarra = 10;

    pp1x = 0;
    pp1y = 0;
    p1Height = 75;
    p1Width = 20;

    pp2y = 0;
    pp2x = 780;
    p2Height = 75;
    p2Width = 20;

    bola.setAttribute("cx", eWidth/2);
    bola.setAttribute("cy", radio);

    
    p1.setAttribute("y", 0);
    p2.setAttribute("y", 0);

    juego = setInterval(dibujarEscenario, 30);
}

function dibujarEscenario() {
    if (colision()) {
        direccionX *= -1;
    }
    if ((poX > (eWidth - radio) || poX < (0 + radio))) {
        if (poX > (eWidth - radio)) {
            let puntos = puntos2.textContent;
            puntos2.textContent = ++puntos;
        }
        if (poX < (0 + radio)) {
            let puntos = puntos1.textContent;
            puntos1.textContent = ++puntos;
        }
        clearInterval(juego);
        newGame();
    }
    poX += direccionX * velocidadx;
    bola.setAttribute("cx", poX);

    if (poY > (eHeight - radio) || poY < (0 + radio)) {
        direccionY *= -1;
    }
    poY += direccionY * velocidady;
    bola.setAttribute("cy", poY);

    colision();

}