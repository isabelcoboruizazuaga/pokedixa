
function reloj(){
    let hora=new Date();
    document.open();
    document.write(hora.getHours(),":",hora.getMinutes(),":",hora.getSeconds()+"<br>");    
    setTimeout(reloj,1000);
};
setTimeout(reloj,1000);