



let num_adivinar= parseInt(prompt("introduce un número"));

let num= parseInt(prompt("¿Qué número es?"));

while(num!=num_adivinar){
    if(num>num_adivinar){
        alert("El número es menor");        
    }else{
        alert("El número es mayor"); 
    }
    num= parseInt(prompt("¿Qué número es?"));
}
alert("Ganaste!"); 
