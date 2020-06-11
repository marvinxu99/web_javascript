/*** */
const age = 15;
switch(true) {
    case age < 13:
        console.log("...");
        break;
    case age >= 13 && age < 20:
        console.log("teenager");
        break;
    default:
        console.log("default")
}


/*** */
var a = 0, b = true;   
switch(true) {
    case a:
        console.log('a');
        break;
    case b:
        console.log('b');
        break;
}

/***** */
const openingHours = date => {
    switch(date.getDay()) {
      case 1:
        return "Closed";   
        
      case 6:
      case 0:
        return "8:00am-12:00pm";    
        
      default:
        return "8:00am-20:00pm";
    }
  }
    console.log(openingHours(new Date()));


/**** */
const weekendDay = date => [0,6].includes(date.getDay());
const restDay = date => date.getDay() === 0;

const openingHours = date => {
  switch(true) {
    case weekendDay(date):
      return "8:00am-12:00pm";
      
    case restDay(date):
      return "Closed";
      
    default:
      return "8:00am-20:00pm";
  }
}

/**** */
const mapper = (k,v) => {
  switch (true) {
    case v instanceof Promise:
      return "Promise";
      
    case v.constructor && v.constructor.name === "AsyncFunction";
      return "async fn()";  
      
    case typeof v === "function":
      return "fn()";
      
    default:
      return v;
  }
}
console.log(JSON.stringify(someObject, mapper, 2));
