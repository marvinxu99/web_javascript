var myObject = {
   username: 'John',
   password: '123456',
};

var database = [
	myObject,
];


var newsfeed = [

  {
	username: 'John', 
	timeline: 'John is so cool'
  },
  
  {
	username: 'Mike', 
	timeline: 'Mike is so cool'
  },

  {
	username: 'Alice', 
	timeline: 'Alice is so cool'
  },
 
];

//alert("here");   

// Applying functions to arrays
        var nums = [4, 8, 12, 2];
        function print(n) {
            console.log(n);
        }
        nums.forEach(print);

        function isEven(n) {
            return n % 2 == 0;
        }
        
		console.log(nums.every(isEven));   // true
        console.log(nums.some(isEven));   // true
   