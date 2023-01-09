/*
Haciendo uso de expresiones regulares crea funciones 
para validar los campos que se indican a continuación.
 La función recibirá un parámetro de tipo string con el valor 
 a validar y debe devolver true o false según cumpla los requisitos
  de validación:

    validarMayuscula: El parámetro debe contener 
    al menos un carácter en mayúscula
    validarCaracteresEspeciales: El parámetro debe
     contener al menos uno de los siguientes caracteres: !@#$%^&
    validarCorreo: El parámetro debe tener el 
    formato correcto de un email
    validarTarjetaCredito: El parámetro debe 
    tener el formato correcto de una tarjeta de crédito
    validarLongitud: El parámetro debe tener 
    al menos 8 caracteres.
    validarNumero: El parámetro debe contener al menos un dígito.
*/
function print(regex){
    if(regex){
        console.log("válido");
    }else{        
        console.log("No válido");
    }
}
function validarMayuscula(str){
    const regex = new RegExp('[A-Z]');
    return regex.test(str);
}
print(validarMayuscula("Hola"));
print(validarMayuscula("hola"));
console.log("-----------------")

function validarCaracteresEspeciales(str){
    const regex = new RegExp('[!@#$%^&]');    
    return regex.test(str);    
}
print(validarCaracteresEspeciales('!@#$%^&'));
print(validarCaracteresEspeciales('!asdad'));
print(validarCaracteresEspeciales('asdasd#sd$sdasd'));
print(validarCaracteresEspeciales('asdad'));

console.log("-----------------")

function validarCorreo(str){
    const regex = new RegExp("^[^@]+@[^@]+\.[a-zA-Z]{2,}$");    
    return regex.test(str);
}

print(validarCorreo('correo@correo.com'));
print(validarCorreo('@corro.com'));
print(validarCorreo('123coreeo@gmail.com'));
print(validarCorreo('novalido@2'));

console.log("-------TarjetaCredito------")

function validarTarjetaCredito(str){
    const regex = new RegExp("^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$");    
    return regex.test(str);
}

print(validarTarjetaCredito("4599830100494019"));
print(validarTarjetaCredito("5888141908888884"));
print(validarTarjetaCredito("5888141908884"));

console.log("-----longitud----------")
function validarLongitud(str){
    const regex = new RegExp("^(?=.{8,}$).*");    
    return regex.test(str);
}
print(validarLongitud("12345678"));
print(validarLongitud("aasdferta"));
print(validarLongitud("av378"));
print(validarLongitud("av37asdfadfad8"));

console.log("-----validarNumero----------")

function validarNumero(str){
    const regex = new RegExp('[0-9]');
    return regex.test(str);
}
print(validarNumero("12345678"));
print(validarNumero("aasdferta"));
print(validarNumero("av378"));