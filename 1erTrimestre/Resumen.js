//Ejercicios de tablas en T.1. Relacion 6. Ajedrez ej 19

//... tres puntos
//Cualquier num de argumentos
function sumar(...numeros){
    let suma=0;
    for (let num of numeros){
        suma=suma+num;
    }
    document.write(suma,'<br>');
    return suma;
}

sumar(1,2,3); //6

//Combinar arrays
function combineTwoArrays (array1,array2){
    let newArray=[...array1,...array2];
    return newArray;
}

//Elementos únicos de un array
let arrayUnicos= new Set(array);

//Fechas
let fecha= new Date();
fecha.setDate(fecha.getDate()+85); //Sumar días
fecha.setFullYear(fecha.getFullYear()+2); //Sumar años
fecha.setHours(fecha.getHours()-24); //Sumar horas

//Timeout T.2 Relación 1 Ej3_Temporizador y ej5

//Cadenas T.2 Relación3 Ej1
//substring apariciones ej3
//cuadrado de HOLA ej9

//Document images Relacion6 ej2

//Geolocation relacion7

//Arrays tema3 arrays y rel1 y 3

//Funciones flecha teema3 rel1b
const sum= (num1,num2)=>num1+num2;

//clases tema3 rel5
class BookList {
    constructor(books=[]){
        this.books=books;
    }

    setNextBook(book=0){
        this.nextBook=book;
    }
    getNextBook(){
        return this.nextBook;
    }
}
