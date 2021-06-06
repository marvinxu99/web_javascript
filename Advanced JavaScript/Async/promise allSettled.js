

const promiseOne = new Promise((resolve, reject) =>
	setTimeout(resolve, 1000));
	
const promiseTwo = new Promise((resolve, reject) =>
	setTimeout(reject, 1000));

const arrayOfPromises = [ promiseOne, promiseTwo];


Promise.allSettled(arrayOfPromises)
	.then(data => console.log(data))
	.catch(e => console.log('something failed', e));
	
Promise.all(arrayOfPromises)
	.then(data => console.log(data))
	.catch(e => console.log('something failed', e));
	
	
async function func1() { 
    await Promise.allSettled(arrayOfPromises)
        .then(data => console.log(data))
        .catch(e => console.log('something failed', e));

    console.log("Promise.all() only takes successfully resolved ones.")

    await Promise.all(arrayOfPromises)
        .then(data => console.log(data))
        .catch(e => console.log('something failed', e));
}
func1();

(async function() { 
    await Promise.allSettled(arrayOfPromises)
        .then(data => console.log(data))
        .catch(e => console.log('something failed', e));

    console.log("Promise.all() only takes successfully resolved ones.")

    await Promise.all(arrayOfPromises)
        .then(data => console.log(data))
        .catch(e => console.log('something failed', e));

})();
