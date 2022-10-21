
function onlyUniques(...array){
    let newArray= new Set(array);

    for(element of newArray){        
        document.write(element + "<br>");
    }
}


onlyUniques('cat', 'cat', 'dog', 'pig'); //['cat', 'dog', 'pig']
onlyUniques(1, 4, 7, 1, 2, 7, 4); //[1, 4, 7, 2]
