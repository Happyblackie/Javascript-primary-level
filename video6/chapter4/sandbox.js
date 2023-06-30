const link = document.querySelector('a');

//get attribute
console.log(link.getAttribute('href'));
//set attribute
link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'The Net Ninja Website';

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));

msg.setAttribute('class', 'success'); //overriding existing attribute
msg.setAttribute('style', 'color:green'); //adding new attribute