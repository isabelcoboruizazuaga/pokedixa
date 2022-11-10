window.onload = () => {
    let enlaces=document.getElementsByTagName("a");
    let numEnlaces=enlaces.length;
    console.log("El numero de enlaces es: "+numEnlaces);

    let penultimo=enlaces[numEnlaces-2];
    console.log("El penultimo elemento es: "+penultimo);

    let contador=0;
    for (let i = 0; i < enlaces.length; i++) {
        let href=enlaces[i].href;
        if(href=="https://www.google.com/"){
            contador++;
        }        
    }
    console.log("Hay: "+contador+" enlaces de google");

    let parrafos=document.getElementsByTagName("p");
    let links=parrafos[2].getElementsByTagName("a");
    let numLinks=links.length;    
    console.log("En el tercer parrafo hay: "+numLinks+" enlaces");
}