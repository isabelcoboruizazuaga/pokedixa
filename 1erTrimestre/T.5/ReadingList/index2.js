/**Editado para usar libreria json */

import { Book } from "./books.js";
//import { BookList } from "./books.js";

window.onload= ()=>{
    var libros=[];

    let add= document.getElementById("add");
    add.addEventListener("click",addLibro);

    var autor=document.getElementById("autor");
    var genero=document.getElementById("genero");
    var titulo=document.getElementById("titulo");


    function cargar() {
        var retrieved = localStorage.getItem("libros");
        libros = JSON.parse(retrieved);
        libros.forEach(libro => {
            addLibro(0,false,libro);
        });
    }


    function addLibro(e,clicado,libro){
        let book;
        if (clicado){
         book= new Book(titulo.value,autor.value,genero.value);
        }else{
            book=libro
        }

        let lista=document.getElementsByTagName("ul")[0];
        let li=document.createElement("li");

        li.innerHTML=book.genre;
        lista.appendChild(li);

        if (clicado){
            libros.push(book)
        }

        localStorage.setItem("libros", JSON.stringify(listaCompra));
        
    }
}