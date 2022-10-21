
function resuelveEcuacion(a,b,c){
    let x1= (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
    let x2= (-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
    document.write("x1= ",x1,"</br>","x2= ",x2);
    return [x1,x2];
}

let a = parseFloat(prompt("Introduce a"));
let b = parseFloat(prompt("Introduce b"));
let c = parseFloat(prompt("Introduce c"));
resuelveEcuacion(a,b,c);