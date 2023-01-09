
document.write(Math.random(),"</br>");

document.write(Math.random() * (201 - 100) + 100,"</br>");

let num1= parseInt(prompt("Introduce un número"));
let num2= parseInt(prompt("Introduce otro número"));

let min=num1;
let max= num2;

if(num1>num2){
    min=num2;
    max=num1;
}


document.write(Math.random() * (max+1 - min) + min,"</br>");


