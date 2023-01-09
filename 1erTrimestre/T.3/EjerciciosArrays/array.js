/**

    EJERCICIO: Guarda en un array la lista de la compra con Peras, Manzanas,
     Kiwis, Plátanos y Mandarinas. Haz los siguiente con splice:

        Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)
        Añade detrás de los Plátanos Naranjas y Sandía (debe quedar Peras, Kiwis,
        Plátanos, Naranjas, Sandía y Mandarinas)
        Quita los Kiwis y pon en su lugar Cerezas y Nísperos (debe quedar Peras, 
        Cerezas, Nísperos, Plátanos, Naranjas, Sandía y Mandarinas)

 */
let listaCompra=["Peras","Manzanas","Kiwis","Plátanos","Mandarinas"]
let borrado=listaCompra.splice(1,1); 
console.log(listaCompra);//["Peras","Kiwis","Plátanos","Mandarinas"]

borrado=listaCompra.splice(3,0,"Naranjas","Sandía");
console.log(listaCompra); //["Peras","Kiwis","Plátanos","Naranjas","Sandía","Mandarinas"]

borrado=listaCompra.splice(1,1,"Cerezas","Nísperos"); 
console.log(listaCompra);//["Peras","Cerezas","Nísperos","Plátanos","Naranjas","Sandía","Mandarinas"]

console.log("__________________________")
/**
 *  EJERCICIO: Haz una función que ordene las notas de un array pasado como parámetro. 
 * Si le pasamos [4,8,3,10,5] debe devolver [3,4,5,8,10]. Pruébalo en la consola
 */
let notas=[4,8,3,10,5];
console.log(notas.sort((a,b)=>a-b));

console.log("__________________________")
/*
    EJERCICIO: Dado un array con los días de la semana obtén
     todos los días que empiezan por ‘M’
 */
let semana=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

console.log(semana.filter((dia)=>dia[0]=="M"));

console.log("__________________________")

/**
 * EJERCICIO: Dado un array con los días de la semana obtén el primer día que empieza por ‘M’
 */
console.log(semana.find((dia)=>dia[0]=="M"));

console.log("__________________________")
/**
    EJERCICIO: Dado un array con los días de la semana obtén la posición en el array del primer día que empieza por ‘M’
 */
console.log(semana.findIndex((dia)=>dia[0]=="M"));

console.log("__________________________")
/**
    EJERCICIO: Dado un array con los días de la semana indica si algún día
     empieza por ‘S’. Dado un array con los días de la semana indica si todos los 
     días acaban por ‘s’
 */
console.log(semana.some((dia=>dia[0]=="S")));
console.log(semana.every((dia=>dia.endsWith("s"))));

console.log("__________________________")
/**    EJERCICIO: Dado un array con los días de la semana devuelve otro
 *  array con los días en mayúsculas
 */
console.log(semana.map(dia=>dia.toUpperCase()));

console.log("__________________________")
/**
    EJERCICIO: Dado el array de notas anterior devuelve la nota media
 */
let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3]
let sumaNotas= arrayNotas.reduce((total,nota)=>(total+=(nota/arrayNotas.length)),0);
console.log(sumaNotas);

console.log("__________________________")
/**
    EJERCICIO: Dado un array con los días de la semana indica si algún día es el ‘Martes’
 */
console.log(semana.includes("Martes"));

/**
    EJERCICIO: Dado el array arr1 con los días de la semana haz un array arr2 
    que sea igual al arr1. Elimina de arr2 el último día y comprueba quá ha
     pasado con arr1. Repita la operación con un array llamado arr3 pero 
     que crearás haciendo una copia de arr1.
 */
let arr1=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
let arr2=arr1;
arr2.pop();
console.log(arr1);

let arr3=arr1;
arr3.pop();
console.log(arr1);