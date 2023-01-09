/*

    Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):

    find largest number
    find longest string
    find even numbers
    find odd numbers
    find words that contain 'is'
    assert all numbers are divisible by three
    zip two arrays together
    sort joined array from smallest to largest
    remove the first word in the array
    place a new word at the start of the array
    replace some elements
*/

let miArray= [1,2,3,9,5,4,8,6,13,10];
document.write( Math.max.apply(Math, miArray),"<br/>");

let miArray2= ["una","palabra","tres"];
let palMayor = miArray2.sort((a, b) => b.length - a.length)[0];
document.write(palMayor,"<br/>");

let even= miArray.filter((n) => n % 2 == 0);
document.write(even,"<br/>");

let odd= miArray.filter((n) => n % 2 != 0);
document.write(odd,"<br/>");

let miArray3=["chasis","cartón","ParálisIs","calisto","palabra","Isla"];
let tienenIs = miArray3.filter((palabra) => palabra.toLowerCase().includes('is'));
document.write(tienenIs,"<br/>");

let miArray4=[3,7,6,9,19,12];
let divisible= miArray4.filter((num)=>num%3==0);
document.write(divisible,"<br/>");

let arrayJuntos= miArray2.concat(miArray3);
document.write(arrayJuntos,"<br/>");

let sorted= arrayJuntos.sort((a,b)=>a.length-b.length);
document.write(sorted,"<br/>");

sorted.shift();
document.write(sorted,"<br/>");


sorted.unshift("a");
document.write(sorted,"<br/>");

sorted.splice(2,1,"patata");
document.write(sorted,"<br/>");