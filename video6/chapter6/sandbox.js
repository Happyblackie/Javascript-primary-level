// const content = document.querySelector('p');

// //geeting classes that an element has
// console.log(content.classList);

// //adds class from an element
// content.classList.add('success');

// //removes class from an element
// content.classList.remove('success');

const paras = document.querySelectorAll('p');

paras.forEach(para=>{
    console.log(para.textContent);
    if(para.textContent.includes('success')){
        para.classList.add('success');
    }
    if(para.innerText.includes('error')){
        para.classList.add('error');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');


