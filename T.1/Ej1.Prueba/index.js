/*
console.log("Esto ya va siendo una página");
document.write("<h1>Contenido de mi primera web<h1>");
document.write("<h2>subtitulo<h2>")

let miVariable; //let local, var es global
console.log("El valor de miVariable es " + miVariable);

miVariable=32;
console.log("El valor de miVariable es " + miVariable);

miVariable=null;
console.log("El valor de miVariable es " + miVariable);

miVariable=undefined;
console.log("El valor de miVariable es " + miVariable);

miVariable=false;
console.log("El valor de miVariable es " + miVariable);


miVariable="pepe";
console.log(`El valor de miVariable es ${miVariable}`); //la comilla esa está sobre la tilde junto a la P

const CONSTANTE=32;
//variableConstante= "a"; //da error al ser una constante

let $vari, _algo, var99; //no 9var
*/
/*
let a= 3;
let b= 5;

let suma= a +b;
let multip= a * b;
let div= a/b;
let elevar= a**b;

console.log(suma);
console.log(multip);
console.log(div);
console.log(elevar);


let booleano=true;
if(booleano)
    console.log("la variable booleano es true")
;
if(booleano){
    console.log("aaaa"); //true
}else{
    console.log("bbbb");
}

if(a==="3"){ 
    console.log("la condicion es true");
}else{
    console.log("la condicion es false"); //false
}

if(a==3 && b==5){
    console.log("la condicion es verdad"); //true
}

if((a=3 || a==27) && b==5)
    console.log("soy verdad")
;
 
switch (a) {
    case a==1:
      console.log("a es 1");
      break;
    case a==3:
      console.log("a es 3");
      break;
    default:
      console.log("a es " +a);
  }

  for(let i=0;i<10;i++){
    document.write(i,'<br>');
  }

  let nombres=["pepe","juan","armando"];
  for(let i=0;i<nombres.length;i++){
    document.write(nombres[i]+"<br>");
  }  
  /*document.write("_______________ <br>");
  
  for (let nombre in nombres){
    document.write(nombre, "<br>");
  }*/
  /*
  document.write("_______________ <br>");
  for (let nombre of nombres) document.write(nombre, "<br>");

  let contador=0;
  while(contador<10){
    contador++;
    document.write(contador,"<br>");
  }*/

  function suma(a=0,b=0,c=0){
    let resultado=a+b+c;
    return resultado;
  }
  document.write(suma(1,3,5),'<br>');

  let numeros=[1,3,5];
  document.write(suma(...numeros),'<br>'); //aqui separa los elementos de un array

  //ESTO CREA UN ARRAY CON LOS ELEMENTOS PASADOS
  function arrayficar(...cosas){
    document.write(cosas.length);
  }
  arrayficar(8,1,2,4,1,"a",1);

  let numeros2=[2,4,6];
  let numerosNuevos=[...numeros,...numeros2];
