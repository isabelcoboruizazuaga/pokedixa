function calcularPotencia(numero,potencia){
    if(potencia!=1){

        return numero*(calcularPotencia(numero,potencia-1));
    }else{
        return 1;
    }
}

document.write(calcularPotencia(2,1),"<br/>");
document.write(calcularPotencia(2,2),"<br/>");
document.write(calcularPotencia(2,3),"<br/>");
document.write(calcularPotencia(2,4),"<br/>");
document.write(calcularPotencia(2,5),"<br/>");
document.write(calcularPotencia(2,6),"<br/>");