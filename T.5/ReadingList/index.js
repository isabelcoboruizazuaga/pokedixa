import { Book } from "./books.js";
//import { BookList } from "./books.js";

window.onload= ()=>{
    let add= document.getElementById("add");
    add.addEventListener("click",addLibro);

    var autor=document.getElementById("autor");
    var genero=document.getElementById("genero");
    var titulo=document.getElementById("titulo");

    function addLibro(e){
        let book= new Book(titulo.value,autor.value,genero.value);
        console.log(book);

        let lista=document.getElementsByTagName("ul")[0];
        let li=document.createElement("li");

        li.innerHTML=book.genre;
        lista.appendChild(li);

        
        //texto.value="";
        
    }

}