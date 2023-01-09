
let mes=prompt("introduce un mes");

function dias30(){
    console.log("Tiene 30 días");
}
function dias31(){
    console.log("Tiene 31 días");
}

switch (mes){
    case "enero":
        dias31();
        break;
    case "febrero":        
        console.log("Tiene 28 días");
        break;        
    case "marzo":
        dias31();
        break;        
    case "abril":
        dias30();
        break;        
    case "mayo":
        dias31();
        break;        
    case "junio":
        dias30();
        break;        
    case "julio":
        dias31();
        break;   
    case "agosto":
        dias31();
        break;   
    case "septiembre":
        dias30();
        break;       
    case "octubre":
        dias31();
        break;           
    case "noviembre":
        dias30();
        break;           
    case "diciembre":
        dias31();
        break;     
}

switch (mes){
    case "enero":
    case "marzo":   
    case "mayo":   
    case "julio":
    case "agosto": 
    case "octubre":   
    case "diciembre":
        dias31();
        break;
    case "febrero":        
        console.log("Tiene 28 días");
        break;
    default:
        dias30();
        break;  
}