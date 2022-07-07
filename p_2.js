const combaination = (list1, list2) =>{
    var newList = [];

    for (var i=0;i<list1.length;++i) {

        newList.push(list1[i]);
        newList.push(list2[i]);

    }
    return newList;
}

const result = combaination(['a','b','c'],[1,2,3])
    
console.log(result);