//getting a referece to the ul
const ul = document.querySelector('.people');

let people = ['happy', 'cecil','faith'];

let html = ``;

// people.forEach(function(person){
//       //create html template
//       html+= `<li style="color:purple;">${person}</li>`;
// });
people.forEach(person=>{
    //create html template
    html+= `<li style="color:purple;">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

  
    

