//returning values
//REGULAR FUNCTION
const calcArea = function(radius)
{
    return 3.142* radius **2;
};

const area = calcArea(5);
console.log(area);


//arrow function
const calc_Area = radius=>3.142* radius **2;
const a  = calcArea(5);
console.log(a);






//regular function
const greet = function()
{
    return 'hello world';
};
const greet_ = greet();
console.log(greet_);

//arrow function
const greeT = ()=>'hello world';
const g_ = greet();
console.log(g_);



const bills = function (products, tax) 
{
    let total = 0;
    for (let index = 0; index < products.length; index++) {
        total+=products[index] + products[index] * tax;
        
    }
    return total;
}

//arrow function
const bills_ = (products,tax)=>{
    let total = 0;
    for (let index = 0; index < products.length; index++) {
        total+=products[index] + products[index] * tax;
        
    }
    return total;
}

const answer = bills([30,40,50],40);
console.log(answer);



