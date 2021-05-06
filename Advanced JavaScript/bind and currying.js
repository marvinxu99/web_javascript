//Function currying 
function multiply(a,b) {
    return a * b;
}

let multiplyByTwo = multiply.bind(null, 2);
console.log(multiplyByTwo(4))

let multiplyByTen = multiply.bind(null, 10)
console.log(multiplyByTen(4))
