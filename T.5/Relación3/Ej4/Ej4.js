window.onload = () => {
    const binSrc = "https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/33-512.png";
    const editSrc = "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/52-512.png";

    var listaCompra = []

    const lista = document.getElementsByClassName("lista")[0];
    const delAll = document.getElementById("del");
    const button = document.getElementById("submit");

    button.addEventListener("click", nuevoElemento);
    delAll.addEventListener("click", deleteAll);

    /**
     * Gestiona la creación de un nuevo elemento en la lista
     * @param {event} e 
     * @see creaArticulo
     * @see addEvents
     */
    function nuevoElemento(e) {
        let item = document.getElementById("item");
        let articulo = item.value;

        //Se añaden los elementos html
        add(articulo);
        item.value = "";

        //Se añaden los events a las imágenes
        addEvents();
    }
    

    /**
     * Devuelve el árbol de nodos de un elemento de la lista creado
     * @param {String} articulo. Nombre del artículo a añadir
     * @returns DOM object. Estructura html del elemento
     * @see add
     */
    function creaArticulo(articulo) {
        //Creación de los nodos
        let element = document.createElement("div");
        element.className = "elemento";

        let nombre = document.createElement("div");
        nombre.className = "nombre";

        let para = document.createElement("p");
        para.innerHTML = articulo;

        let imgs = document.createElement("div");
        imgs.className = "imgs";

        let imgEdit = document.createElement("img");
        imgEdit.src = editSrc;

        let imgDel = document.createElement("img");
        imgDel.src = binSrc;

        //Anexión de los nodos
        imgs.appendChild(imgEdit);
        imgs.appendChild(imgDel);
        nombre.appendChild(para);
        element.appendChild(nombre);
        element.appendChild(imgs);

        return element;
    }

    /**
     * Crea la estructura artículo con el nombre pasado y la añade al html existente
     * @param {*} articulo : String. Nombre del artículo a añadir
     * @see creaArticulo
     * @see nuevoElemento
     */
    function add(articulo) {
        let element = creaArticulo(articulo)
        lista.appendChild(element);

        art = new ArticuloCompra(element)
        listaCompra.push(art);
    }

    /**
     * Añade EventListener a las imágenes de los elementos creados
     */
    function addEvents() {
        let imagenes = document.getElementsByTagName("img");
        for (let i = 0; i < imagenes.length; i++) {
            imagenes[i].addEventListener("click", imagenPulsada);

        }
    }

    /**
     * Gestiona lo que sucede al pulsar una imagen, determinando si es la de edición o borrado
     * @param {event} e 
     * @see editar
     * @see borrar
     */
    function imagenPulsada(e) {
        let src = e.target.src;
        if (src == editSrc) {
            editar(e.target)
        } else {
            borrar(e.target)
        }
    }

    /**
     * Borra un elemento de la lista, este método es llamado desde imagenPulsada
     * @param {*} target . Imagen html pulsada
     * @see imagenPulsada
     */
    function borrar(target) {
        for (let i = 0; i < listaCompra.length; i++) {
            let art = listaCompra[i].elementoDiv
            if ((art).contains(target)) {
                listaCompra.splice(i, 1);
                lista.removeChild(art);
            }

        }
    }

    /**
     * Edita un elemento de la lista, este método es llamado desde imagenPulsada
     * @param {*} target 
     * @see imagenPulsada
     */
    function editar(target) {
        for (let i = 0; i < listaCompra.length; i++) {
            let art = listaCompra[i].elementoDiv

            if ((art).contains(target)) {
                //Se establece el nuevo nombre
                let articulo = window.prompt("Introduce el nuevo nombre")
                let editado = creaArticulo(articulo);

                //Se sustituye
                lista.replaceChild(editado, art);
                listaCompra[i] = new ArticuloCompra(editado);

                //Se asignan de nuevo los eventListeners
                addEvents();

            }

        }
    }

    /**
     * Elimina todos los elementos de una lista
     * @param {event} e 
     */
    function deleteAll(e) {
        lista.innerHTML = '';
        listaCompra = [];
    }

    /**
     * Clase usada para almacenar árboles DOM
     */
    class ArticuloCompra {
        constructor(elementoDiv) {
            this.elementoDiv = elementoDiv;
        }
    }
}

