window.onload = () => {
    var dorsoSrc = "https://images.unsplash.com/photo-1575330719343-23de81f5b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80"
    var imagenes = [];
    var levantadas = [];
    var intentos = 10;

    var imgs = document.getElementsByTagName("img");
    var inte = document.getElementById("intentos");
    var win = document.getElementById("won");
    var lost = document.getElementById("lost");
    var newGame = document.getElementById("game");

    nuevoJuego();

    /**
     * Inicializa el juego
     */
    function nuevoJuego() {
        win.style.visibility = "hidden";
        lost.style.visibility = "hidden";
        newGame.style.visibility = "hidden";

        //Asignación de eventListeners
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].src = dorsoSrc;
            imgs[i].addEventListener("click", voltear);
        }
        newGame.addEventListener("click", nuevoJuego);

        colocarCartas();
        intentos = 10
        inte.innerHTML = intentos;
    }


    /**
     * Inicializa el array de imágenes
     */
    function colocarCartas() {
        let imagHalf = ["https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941__340.jpg",
            "https://i.pinimg.com/736x/ab/0a/b4/ab0ab4bff218d4a0064932b084e751f7.jpg",
            "https://image.geo.de/30046366/t/v-/v3/w1440/r1/-/tier-gross-jpg--19750-.jpg",
            "https://static.educalingo.com/img/ms/800/penguin.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/640px-African_Bush_Elephant.jpg"];

        imagenes = imagHalf.concat(imagHalf);

        mezclar(imagenes);
    }

    /**
     * Gira una carta que ha sido pulsada 
     * @param {event} e 
     * @see comprobarLevantadas
     */
    function voltear(e) {
        //Se voltea la imagen seleccionada
        for (let i = 0; i < imgs.length; i++) {
            if (e.target == imgs[i]) {
                e.target.src = imagenes[i]
            }
        }

        //Guardo la carta levantada
        levantadas.push(e.target);

        setTimeout(comprobarLevantadas, 1000);

    }

    /**
     * Comprueba las cartas que hay levantadas en el momento y si son iguales o no
     * @see voltear
     * @see isWon
     * @see partidaGanada
     * @see partidaPerdida
     */
    function comprobarLevantadas() {
        if (levantadas.length == 2) {
            //Si hay dos levantadas se comprueban que sean distintas
            if (levantadas[0].src != levantadas[1].src) {
                //Se vuelve a mostrar el dorso al no coincidir
                levantadas[0].src = dorsoSrc;
                levantadas[1].src = dorsoSrc;
                levantadas = [];

                //Restamos vidas a los intentos
                intentos = intentos - 1;
                inte.innerHTML = intentos;

                if (intentos == 0) {
                    partidaPerdida();
                }
            } else {
                levantadas = [];
                if (isWon()) {
                    partidaGanada();
                }
            }
        }
    }


    /**
     * Mezcla un array en orden aleatorio
     * @param {array} array 
     * @returns array
     */
    function mezclar(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    /**
     * Determina si la partida se ha ganado o no
     * @returns boolean: True si se ha ganado, False si no
     * @see comprobarLevantadas
     */
     function isWon() {
        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].src == dorsoSrc) {
                console.log(false);
                return false;
            }
        }
        return true;
    }

    /**
     * Muestra el mensaje de haber ganado la partida y el botón de jugar de nuevo
     * @see comprobarLevantadas
     */
    function partidaGanada() {
        win.style.visibility = "visible";
        lost.style.visibility = "hidden";
        newGame.style.visibility = "visible";
    }

    /**
     * Muestra el mensaje de haber perdido la partida y el botón de jugar de nuevo
     * @see comprobarLevantadas
     */
    function partidaPerdida() {
        lost.style.visibility = "visible";
        win.style.visibility = "hidden";
        newGame.style.visibility = "visible";
    }
}
