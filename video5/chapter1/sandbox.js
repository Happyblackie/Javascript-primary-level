//object literals
//objects in javascript are made using calibraces eg.
let user = {
    name: 'happy',
    age : 25,
    email: 'happy@thenetninja.com',
    location:'kenya',
    blogs: ['why mac $ cheese rules', '10 things to make with marmite']
};

//accessing properties in an object using dot. notation
console.log(user);
console.log(user.name);

//updating properties in an object using dot. notation
user.age = 24;
console.log(user.age);

//accessing properties in an object using squarebracket[] notation
console.log(user['location']);
//updating properties in an object using squarebracket[] notation
user['email'] = 'otis@me.co.ke';
console.log(user['email']);

console.log(typeof user) //checking data type


