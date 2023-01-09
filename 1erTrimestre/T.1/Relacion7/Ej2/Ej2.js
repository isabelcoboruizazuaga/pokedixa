//Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings),
// and returns the sum of only the numbers.


function addOnlyNums(...array){
    let sum=0;
    for (element of array){
        if (typeof element != "string"){
            sum=sum+element;
        }
    }
    document.write(sum,'<br>');
}

addOnlyNums(1); //1
addOnlyNums('a'); //0
addOnlyNums('1',1,1,2); //4