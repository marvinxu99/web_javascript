//Object spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

const { tiger, lion, ...rest } = animals;
//>>> console.log( tiger, lion, rest)

// Same idea as that for an array
const array = [1,2,3,4,5];
const sum = (p1, p2, p3, p4, p5) => p1 + p2+ p3 + p4 + p5;

function sum2(p1, p2, p3, p4, p5) {
    return p1 + p2+ p3 + p4 + p5;
}
//>>sum2(...array);
//>>15


