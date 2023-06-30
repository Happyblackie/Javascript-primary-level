//function expression
const speak = function()
{
    console.log('good day1');
};

speak();



//function declaration
function greet()
{
    console.log('good morning');
}

greet();



//function HOISTING--- function comes after invoking it
//only works for function declaration

question();

function question()
{
    console.log('what is your name?');
}