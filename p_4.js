const numList = [50, 2, 1, 9];

const simplified = (arr) =>{
    return [...arr].sort((a, b) => b.toString() + a > a.toString() + b? 1: -1);
}

let result = simplified(numList).join('');

console.log(result)