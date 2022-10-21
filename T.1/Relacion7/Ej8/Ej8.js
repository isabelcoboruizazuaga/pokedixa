function squareAndSum (...arguments){
    let sum=0;
    for (element of arguments){
        sum=sum+ Math.pow(element,2);
    }
    document.write(sum + "<br>");

}

squareAndSum(2, 4, 3); //29
squareAndSum(1, 2); //5