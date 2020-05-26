// Reference type
var obj1 = { value: 10 };
var obj2 = obj1;
var obj3 = { value: 10 };

//Context vs scope
const object {
    a: function() {
        console.log(this);
    }
}

//Instantiation
class Player {
    cnstructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`hi I am ${this.name}, i am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);        
    }
    play() {
        console.log(`WEEEEEE I'am a ${this.type}`)
    }
}

const wizard = new Wizard('Shelly', 'Healer');
const wizards = new Wizard('Shawn', 'Dark magic');

var c = [1,2 ,4,5,]'
var d = c;
var d2= [].concat(c);

let obj = { a: 3, b:4 }
let clone = Object.assign({}, obj);
let clone2 = {...obj};

let superClone = JSON.parse(JSON.stringify(obj));




