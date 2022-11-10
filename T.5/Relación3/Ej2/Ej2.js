window.onload = () => {
    var palabra, lives = 10;

    //Elementos del html
    let botones = document.getElementsByTagName("button");
    var pal = document.getElementById("word");
    var cat = document.getElementById("category");
    var liv = document.getElementById("lives");
    var newGam = document.getElementById("newGame")

    //Asignacion de Event Listener
    for (let i = 0; i < (botones.length) - 1; i++) {
        botones[i].addEventListener("click", comprobar);

    }
    newGam.addEventListener("click",newGame);

    //Inicialización del juego    
    newGame();


    /**
     * Método que setea una categoría aleatoria
     */
    function elegirCategoria() {
        let cities = ["Rome", "Madrid", "Granada", "Tokyo", "Vancouver"];
        let foods = ["Hamburguer", "Fries", "Soup", "Chicken", "Pizza"];
        let animals = ["Dog", "Turtle", "Elephant", "Penguin", "Tiger"];
        let categoria;

        let rnd = random(4, 0);
        switch (rnd) {
            case 1:
                categoria = "cities";
                elegirPalabra(cities);
                break;
            case 2:
                categoria = "foods";
                elegirPalabra(foods);
                break;
            case 3:
                categoria = "animals";
                elegirPalabra(animals);
                break;
        }

        cat.innerHTML = categoria;
    }

    /**
     * Método que elige una palabra de una categoria
     * @param {array} categoria : array de palabras de una categoria
     */
    function elegirPalabra(categoria) {
        palabra = (categoria[random(0, categoria.length - 1)]).toLowerCase();
    }

    /**
     * Elige la categoría y la palabra de dicha categoría
     */
    function newGame() {
        elegirCategoria();
        colocarPalabra(palabra);
        console.log(palabra);
        lives = 10;
        liv.innerHTML = lives;
    }

    /**
     * Coloca la palabra dada en el html
     * @param {String} palabra 
     */
    function colocarPalabra(palabra) {
        let palabraCod = "";

        for (let i = 0; i < palabra.length; i++) {
            palabraCod = palabraCod + "_ ";
        }

        pal.innerHTML = palabraCod;
    }

    /**
     * Al pulsar una letra comprueba si está en la palabra y actúa acorde esté o no
     * @param {event} e 
     */
    function comprobar(e) {
        let letra = e.target.textContent;
        let palabraCod = pal.textContent;

        let palabraCodArray = palabraCod.split(' ');


        if (estaEnPalabra(letra, palabraCodArray) == false) {
            lives = liv.textContent;
            lives = lives - 1;
            liv.innerHTML = lives;
        } else {
            for (let i = 0; i < palabra.length; i++) {
                if (palabra[i] == letra) {
                    palabraCodArray[i] = letra;
                }
            }
        }


        pal.innerHTML = palabraCodArray.join(" ");

        if (lives == 0) {
            pal.innerHTML = "PERDISTE, LA PALABRA ERA: " + palabra;
        }
    }

    /**
     * Indica si una letra se encuentra o no en la palabra
     * @param {string} letra 
     * @returns boolean
     */
    function estaEnPalabra(letra) {

        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] == letra) {
                return true;
            }
        }
        return false;
    }

    /**
     * Genera un número aleatorio entre dos números dados
     * @param {int} min 
     * @param {int} max 
     * @returns número aleatorio
     */
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}