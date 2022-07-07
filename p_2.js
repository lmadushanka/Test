const combaination = (newList1, newList2) =>{
    var newList = [];

    for (var i=0;i<newList1.length;++i) {

        newList.push(newList1[i]);
        newList.push(newList2[i]);

    }
    return newList;
}

const result = combaination(['a','b','c'],[1,2,3])
    
console.log(result);