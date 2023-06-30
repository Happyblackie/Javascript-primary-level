//getting inner text of an element
const para = document.querySelector('p');
// console.log(para.innerText);

// para.innerText = 'hello globe!'; //overrides innerttext of an element
// para.innerText+= 'the world is vast'; //appends new word next to inner text of an element



const paras = document.querySelectorAll('p');
// paras.forEach(para=>{
//     console.log(para.innerText);
//     para.innerText+= ' new text';
// });


//getting inner html contents
const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML+= '<h2>this is a new h2</h2>';

const people = ['happy', 'cecil', 'faith'];

people.forEach(person=>{
    content.innerHTML += `<p>${person}</p>`;
});

