"hello".padStart(10);
"hello".padEnd(10);

let func = (a, b, c, d,) => {
    console.log(a);
};

Object.values;
Object.entries;
Object.keys;

let obj = {
    username1: 'Santa',
    username2: 'Rudolf',
    username3: 'Mr. Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.keys(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map(value => {
    console.log(value[1] + value[0].replace('username', ''));
})
