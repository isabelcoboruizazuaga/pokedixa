import { Book, BookList } from "./books.js";
//import { BookList } from "./books.js";

window.onload = () => {
    var listaLibros = new BookList();

    const add = document.getElementById("add");
    const lista = document.getElementById("lista");
    const normal = document.getElementById("normal")

    add.addEventListener("click", addLibro);
    normal.addEventListener("click", vistaNormal);
    lista.addEventListener("click", vistaLista);

    var autor = document.getElementById("autor");
    var genero = document.getElementById("genero");
    var titulo = document.getElementById("titulo");

    function vistaLista() {
        mostrarLista();
    }

    function vistaNormal() {
        mostrarDivs();
    }

    function addLibro(e) {
        let book = new Book(titulo.value, autor.value, genero.value);
        listaLibros.add(book);
        autor.value="";    
        genero.value="";        
        titulo.value="";            
    }

    function mostrarLista() {
        let div = document.getElementById("list");
        div.innerHTML = '';
        let ul = document.createElement("ul");
        listaLibros.books.forEach(book => {
            let li = document.createElement("li");

            li.innerHTML = book.title;
            ul.appendChild(li);
            div.appendChild(ul);
        });
    }

    function mostrarDivs(e) {
        let div = document.getElementById("list");
        div.innerHTML = '';
        let libro = document.createElement("div");
        listaLibros.books.forEach(book => {
            let parrafo = document.createElement("p");

            parrafo.innerHTML = book.title;
            libro.appendChild(parrafo);
            div.appendChild(libro);
        });
    }

}