window.onload = () => {    
    var adjuntar=document.getElementById("adj");
    adjuntar.addEventListener("click",addElement);
    
    function addElement(e){
        let formulario=document.getElementById("form");

        let input=document.createElement("input");
        input.type="file";

        let br=document.createElement("br");

        formulario.insertBefore(br,adjuntar);
        formulario.insertBefore(input,adjuntar);
        formulario.insertBefore(br,adjuntar);       
        
        e.preventDefault();
    }
}