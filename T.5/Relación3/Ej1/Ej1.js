window.onload = () => {
    var intervalo;
    var minutos = 00;
    var segundos = 00;

    let strt=document.getElementById("start");
    let stp=document.getElementById("stop");
    let rset=document.getElementById("reset");

    strt.addEventListener("click",start);
    stp.addEventListener("click",stop);
    rset.addEventListener("click",reset);


    function crono() {
        segundos++;
        if (segundos == 60) {
            minutos++;
            segundos = 00;
        }
        let reloj = document.getElementById("reloj");
        reloj.innerHTML = minutos + ":" + segundos;
    }

    function start(){
        intervalo = setInterval(crono, 1000);
    }

    function stop() {
        clearInterval(intervalo);
    }

    function reset() {        
        stop();
        minutos = 00;
        segundos = 00;
        
        let reloj = document.getElementById("reloj");
        reloj.innerHTML = minutos + ":" + segundos;
    }
}
