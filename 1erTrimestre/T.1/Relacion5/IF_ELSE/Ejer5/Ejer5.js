
let nEx1= parseFloat(prompt("introduce una nota de examen"));
let nEx2= parseFloat(prompt("introduce otra nota de examen"));

let nTr1= parseFloat(prompt("introduce una nota de trabajo"));
let nTr2= parseFloat(prompt("introduce otra nota de trabajo"));

let mediaExamenes=(nEx1+nEx2)/2;
let mediaTrabajos=(nTr1+nTr2)/2;

let mediaTodos=(mediaExamenes*0.75) + (mediaTrabajos*0.25)

if(mediaTodos>=5 &&(nEx1>=4.5 && nEx2>=4.5 && nTr1>=4.5 && nTr2>=4.5)){
    console.log("Has aprobado");
}else{
    console.log("Has suspendido");
}
