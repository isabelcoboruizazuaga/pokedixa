
let i= 60;
function reloj(){
    let hora=new Date();
    document.write(i--,"<br>");
    if((hora.getSeconds()<60)&&(hora.getSeconds()>0)){
        
        setTimeout(reloj,1000);
    }
};
setTimeout(reloj,1000);


/*setTimeout( function(){
    document.write("salta")
}, 3000);*/
/*
function reloj(){
    let hora=new Date();
    document.write(hora.getSeconds()+"<br>");
    if(hora.getSeconds()<55){
        
    setTimeout(reloj,1000);
    }
};
setTimeout(reloj,1000);*/

/*

function reloj(){
    let hora=new Date();
    document.write(hora.getSeconds()+"<br>");
    if(hora.getSeconds()<5){
        clearInterval(intervalo);
    }
};
var intervalo= setInterval(reloj,1000);*/