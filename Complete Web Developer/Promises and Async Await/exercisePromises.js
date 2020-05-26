// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "success");
})

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000)
  });
  
// #2) Run the above promise and make it console.log "success"
promise.then(result => result + '!')
    .then(result2 => {
        console.log(result2)
    })

// or
promise.then(console.log)
// or
promise.then(resp => console.log(resp))


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 4000);
})
promise2.then(result => result + '!')
    .then(result2 => {
        console.log(result2)
    })

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Whoops'), 1000);
})

promise3.then(result => result + '!')
    .then(result2 => {
        console.log(result2)
    })
    .catch(() => {
        console.log("Oooops somethibg went long")
    })

promise3.catch(alert);

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all( urls.map( url => {
    return fetch(url).then(response => response.json())
    })).then(results => {
        console.log(results);
    }).catch(() => {
        console.log('error')
    }) 

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err));
