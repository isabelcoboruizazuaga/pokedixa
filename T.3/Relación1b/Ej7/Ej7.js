//Write an arrow function that takes an array of integers, 
//and returns the sum of the elements in the array. 
//Google and use the built-in reduce array method for this.

const integers=[1,2,3,4,5,6];


const initialValue = 0;

integers.reduce( (previousValue, currentValue) => previousValue + currentValue, initialValue);


console.log(integers.reduce(sum,0));
