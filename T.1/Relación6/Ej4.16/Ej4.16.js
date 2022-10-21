

let num_adivinar= parseInt(prompt("introduce un número"));

let num;

do{
    num= parseInt(prompt("¿Qué número es?"));
    
    if(num>num_adivinar){
        alert("El número es menor");        
    }else{
        if(num<num_adivinar){
        alert("El número es mayor"); 
        }
    }
}while(num!=num_adivinar)
alert("Ganaste!"); 
