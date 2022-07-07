const getAllPossibilities = (a) =>{

    var res = ["1"], combin;

    for(var i = 2; i <= 9; i++){
      combin = [];
      res.forEach((x) =>{
        combin.push(x + i, x + " +" + i, x + " -" + i);
      });
      res = combin;
    }
   
    return combin.filter((combo) =>{
      return combo.split(" ").reduce((x,y) =>{
        return x/1+y/1;
      }) == a;
    })

    .map((x) =>{
        return x.replace(/([+-])/g,'$1 ');
    });   
}

console.log(getAllPossibilities(100));