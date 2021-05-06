//call()
function a() {
  console.log('hi');
}

a.call()   // = a(); all function has this call() property



const wizard = {
  name: 'Merlin',
  health: 100,
  heal: function(num1, num2) {
    this.health += num1 + num2;
  }
}

const archer = {
  name: 'Robin Hood',
  health: 50
}

wizard.heal.call(archer, 50, 60)
wizard.heal.apply(archer, [20, 30])
archer
// function borrowing

const healArcher = wizard.heal.bind(archer, 50, 60);
console.log(archer)
healArcher()
console.log(archer)


const array = [1,2,3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr){
  return Math.max.apply(null, arr);  
}

getMaxNumber(array)