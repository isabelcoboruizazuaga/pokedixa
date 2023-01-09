function calcularFactorial(numero){
    if(numero!=1){
        return numero*(calcularFactorial(numero-1));
    }else{
        return 1;
    }
}

for (let i = 0; i < 10; i++) {
    document.write(calcularFactorial(i+1),"<br/>");
    
}