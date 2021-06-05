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
		
	} catch(e) {
		console.log("oops", e);	
	}
}



