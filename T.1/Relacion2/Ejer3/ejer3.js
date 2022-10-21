/*
Calculate properties of a circle, searching the internet for definitions if not remember.

    Store a radius into a variable.
    Calculate the circumference based on the radius, and output "The circumference is NN".
    Calculate the area based on the radius, and output "The area is NN".

*/
let radius= 5;
let pi= 3.14;
document.write("The radius is "+radius+"<p></p>");

let circumference= pi*radius*2;
document.write("The circumference is "+circumference+"<p></p>");

let area= pi*(radius**2);
document.write("The area is "+area+"<p></p>");
