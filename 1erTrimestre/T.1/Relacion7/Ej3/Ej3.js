
function countTheArgs(...args){
    return args.length;
}

document.write(countTheArgs(1,2,3,4));
document.write(countTheArgs(1,2,3));
document.write(countTheArgs(1,2,3,4,5,6,7,8));

function combineTwoArrays (array1,array2){
    let newArray=[...array1,...array2];
    return newArray;
}
document.write(combineTwoArrays([1,2,3],[4,5,6,7]));
