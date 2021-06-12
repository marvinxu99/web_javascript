Promise.resolve('asyncfail')
    .then(response => {
        console.log(response)
        throw new Error('#1 fail')
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.error('error', err.message)
    })
    .then(response => {
        console.log('hi am I still needed?', response)
        return 'done'
    })
    .catch(err => {
        console.error(err)
        return 'failed'
    })

// Async await
(async function() {
    try {
        await Promise.reject('oopsie')

    } catch (err) {
        console.error(err)
    }

    console.log('This is still good!')
})()

// Exercise
(function () {
    try {
      throw new Error();
    } catch (err) {
      var err = 5;
      var boo = 10;
      console.log("err1= ", err);
    }
    //Guess what the output is here:
    console.log("err2 = ", err);
    console.log("boo=", boo);
  })();