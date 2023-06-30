//Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));    


//random numbers
const random = Math.random();
console.log(random); //random numbers between 0-1
console.log(Math.round(random * 100)); //random numbers between 1-100




//premitive type vs reference type
/* premitive values */
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

//premmitive value overriden doesn't affect another
scoreOne= 100;
console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);


/* Reference values */
const userOne = {name:'happy',age:25};
userTwo = userOne;
console.log(userOne, userTwo);

//reference value overriden affects/changes the other as well 
userOne.name = 'cecil';
console.log(userOne, userTwo);