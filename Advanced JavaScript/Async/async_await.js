
function request(){
	fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(res =>{
        console.log(res);
    });
}

function fetchUsersDemo(){
	fetchUsers();
}

async function fetchUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
	const data = await response.json();
	console.log(data);
}
