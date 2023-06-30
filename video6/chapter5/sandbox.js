const title = document.querySelector('h1');

//overrides currnet styling---not good
// title.setAttribute('style', 'margin:50px;'); 

console.log(title.style); //listing how to style elements
console.log(title.style.color); //finds the style atribute

//adding style/attribute without overriding
title.style.margin = '50px';
title.style.color = 'green';
title.style.fontSize = '30px';

//deletes a specific attribute
title.style.margin = '';
