//Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

function sumar(...numeros){
    let suma=0;
    for (let num of numeros){
        suma=suma+num;
    }
    document.write(suma,'<br>');
    return suma;
}

sumar(1,2,3); //6
sumar(1); //1
sumar(1,2,3,4); //10