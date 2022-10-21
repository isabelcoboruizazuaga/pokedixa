
function esPar(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}


function sumEveryOther(...arguments){    
    let sum=0;
    for (i of arguments){
        if (!esPar(i+1)){
            sum=sum+arguments[i];            
        } 
    }
    document.write(sum + "<br>");
    return sum;
} 

sumEveryOther(1,2,2,2,3); //6
sumEveryOther(2,3,4,1,1,2,1,9,1); //9