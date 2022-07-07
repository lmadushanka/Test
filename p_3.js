const fibonacci = (x) =>{
    if(x === 1){
        return [0, 1];
    }else{
        var s = fibonacci(x - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s
    }
}

const resultOfFibonacci = fibonacci(100);

console.log('Fibonacci numbers: ' +resultOfFibonacci);