a=[3,45,2,5,1,13,27,9]

a.sort((a,b)=>{
    if (a>b)
        return +1;
    else if (a<b)
        return -1;
        else
            return 0;
});


alumnos=[[{nombre:"Marquez",edad:21},{nombre:"Laura",edad:22},{nombre:"Pepe",edad:18}]]

console.log( alumnos.sort((a,b)=>{
    if (a.edad>b.edad)
        return +1;
    else if (a.edad<b.edad)
        return -1;
        else
            return 0;
}));

//ESTO ES IGUAL A LO DE ARRIBA
console.log( alumnos.sort((a,b)=>a.edad-b.edad));

//DE MENOR A MAYOR
console.log( alumnos.sort((a,b)=>b.edad-a.edad));   
