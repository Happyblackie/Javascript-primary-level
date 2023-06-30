// const para = document.querySelector('p'); selects first paragragh element  from topm
// const para = document.querySelector('.error'); selects any class with name error
// const para = document.querySelector('div.error'); specifically a div a class name error
const para = document.querySelector('body > h1');
console.log(para);


const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');
console.log(errors)

paras.forEach(para=>{
    console.log(para);
});