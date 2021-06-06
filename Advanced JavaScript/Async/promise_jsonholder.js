function fetchUsers(){
	
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			console.log('users', users);
		})
}

function fetchPosts(){
	
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(users => {
			console.log('users', users);
		})
}

function fetchAlbums(){
	
	fetch('https://jsonplaceholder.typicode.com/albums')
		.then(response => response.json())
		.then(users => {
			console.log('users', users);
		})
}

/* With promise */
function fetchData() {
	
	const urls = [
		'https://jsonplaceholder.typicode.com/users',
		'https://jsonplaceholder.typicode.com/albums',
		'https://jsonplaceholder.typicode.com/posts'
	]

	Promise.all(urls.map(url =>
		fetch(url)
			.then(response => response.json())
			.then(arrays => {
				console.log('users', arrays[0]);
				console.log('albumss', arrays[1]);
				console.log('posts', arrays[2]);
			})
			.catch(function (e){
				console.log(e.message);
			})
			.finally(() => {
				console.log("Finally...");
			})
	));
}

/* With async and await */
const fetchDataAsync = async function() {
	const urls = [
		'https://jsonplaceholder.typicode.com/users',
		'https://jsonplaceholder.typicode.com/albums',
		'https://jsonplaceholder.typicode.com/posts'
	]
	
	try {
		const [ users, albums, posts ] = await Promise.all(urls.map(url =>
			fetch(url).then(response => response.json())
		));
		
		console.log('users', users);
		console.log('albumss', albums);
		console.log('posts', posts);
		
	} catch(err) {
		console.log("oops", err);	
	} finally {
		console.log("Finally....");
	}	
}

// for of 
function loopThrough() {
    const array1 = [1,2,3,4,5];
    for (arr of array1) {
        console.log(arr);
    }
}
loopThrough();

/* With async and for await of */
const fetchDataAsync2 = async function() {
	const urls = [
		'https://jsonplaceholder.typicode.com/users',
		'https://jsonplaceholder.typicode.com/albums',
		'https://jsonplaceholder.typicode.com/posts'
	]
	
	try {
		const arrayOfPromises = urls.map(url => fetch(url));
		for await (let request of arrayOfPromises) {
			const data = await request.json();	
			console.log(data);
		}
		
	} catch(err) {
		console.log("oops", err);	
	} finally {
		console.log("Finally....");
	}	
}


