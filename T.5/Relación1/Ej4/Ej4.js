window.onload = () => {
    let boton=document.getElementsByTagName("button")[0];
    boton.addEventListener("click",addElement);
    
    function addElement(e){
        let lista=document.getElementsByTagName("ul")[0];
        let li=document.createElement("li");

        let texto=document.getElementById("texto");

        li.innerHTML=texto.value;
        lista.appendChild(li);

        
        texto.value="";
        
        
    }
}