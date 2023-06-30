//template strings...........or template literals
const title = 'Best reads of 2023';
const author = 'happy';
const likes = 30;

//concatenation
// let result = 'The blog called '+ title + ' by '+ author + ' has ' + likes + ' likes';
// console.log(result);

// template string way
let result = `The blog called ${title} by ${author} has ${likes}`;
console.log(result);


//use case creating html templates .later showing them on the browser

let html = `
    <h2> ${title} <h2/>
    <p>By: ${author} <p/>
    <span> This blog has ${likes} likes <span/>
`;

console.log(html);