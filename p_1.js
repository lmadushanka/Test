const sumForLoop = (numList) =>{
    var sum = 0;
    for(var i = 0; i < numList.length; i++){
       sum += numList[i];
    }
    return sum;
}
   

const sumWhileLoop = (numList) =>{
    var sum = 0;
    numList = numList.slice();
    while(numList.length){
      sum += numList.shift();
    }
    return sum;
}

const sumRecursion = (numList) =>{
    numList = numList.slice();
    function rec(numList){
      return numList.shift() + (numList.length && rec(numList));
    }
    return rec(numList);
}

console.log(sumForLoop([1,2,2,3])); 
console.log(sumWhileLoop([1,2,2,3])); 
console.log(sumRecursion([1,2,2,3])); 