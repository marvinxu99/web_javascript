const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked');
    } else {
        reject('error, it broke.');
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "HIII");
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Rookie");
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Is it me you are looking for?");
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

promise
    .then(result => result + '!')
    .then(result2 => {
        throw Error;
        console.log(result2)
    })
    .catch(() => console.log('error!'))

