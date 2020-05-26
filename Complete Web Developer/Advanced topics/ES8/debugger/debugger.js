const flattened = [[0,1], [2,3], [4,5]].reduce(
    (a, b) => a.cancat(b), []);


const flattened = [[0,1], [2,3],[4,5]].reduce(
    (accumultor, array) => {
        debugger;
        return accumultor.concat(array)
}, []);


//Asynchronous programming
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000);
console.log('3');

