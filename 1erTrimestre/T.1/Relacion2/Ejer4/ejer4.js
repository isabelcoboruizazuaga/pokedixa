/*
It's hot out! Let's make a converter, and again you'll have to search the internet how to do it.

    Store a celsius temperature into a variable.
    Convert it to fahrenheit and output "NN°C is NN°F".
    Now store a fahrenheit temperature into a variable.
    Convert it to celsius and output "NN°F is NN°C."
*/

let celsius= 23;

let fahrenheit= celsius*1.8+32
document.write(celsius+"ºC is "+fahrenheit+"ºF <p></p>" );

let celsius2= (fahrenheit-32) *(5/9);

document.write(fahrenheit+"ºF is "+ celsius2+"ºC <p></p>");