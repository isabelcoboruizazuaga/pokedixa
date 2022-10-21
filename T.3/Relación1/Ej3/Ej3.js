function lanzamiento(){
    return(Math.floor(Math.random() * 7));
}

function lanzarDados(){
    let arrayOcurrencias=[0,0,0,0,0,0];
    for (let i = 0; i <6000; i++) {        
        let numero=lanzamiento();

        arrayOcurrencias[numero-1]= arrayOcurrencias[numero-1]+1
        
    }

    return arrayOcurrencias;
}

document.write(lanzarDados(),"<br/>");