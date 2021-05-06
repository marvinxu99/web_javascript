//Exercise:
const a = function() {
  console.log(this)
  const b = function() {
    console.log(this)
    const c = {
      hi: function() {
     console.log(this)
    }}
    c.hi()
  }
  b()
}

a()

//JS is weird:
const obj = {
  name: 'Billy',
  sing: function() {
    console.log(this) // in this case, it's a method on an object.
    var anotherFunc = function() {
      console.log(this)// this points to windows!   use arrow function will fix it(below)
    }
  }
}

const obj3 = {
  name: 'Billy',
  sing: function() {
    console.log("a", this) // in this case, it's a method on an object.
    var anotherFunc = () => {
      console.log("b", this)      // this points to obj because of using arrow function 
    }
    anotherFunc();
  }
}

//ANother ways is to use a variable to remember this

const obj = {
  name: 'Billy',
 
 sing: function() {
    console.log(this)
    var self = this
    var anotherFunc = function() {
      console.log(self)
    }
  }
}