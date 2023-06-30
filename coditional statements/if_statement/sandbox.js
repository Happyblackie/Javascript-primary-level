//is statement

// const  age = 25;

// if (age > 20) 
// {
//     console.log('you are over 20 years');    
// }


// const developers = ['happy', 'shaun', 'cecil','luigi','mario'];
// if (developers.length > 3) {
//     console.log("that's a lot of nijas");
// } 


//(c)----->logical operators   OR || AND &&

const password = 'p@55';
if (password.length > 12 && password.includes('@')) 
{
    console.log('that password is mighty strong');
}
else if (password.length >= 8 || password.includes('@') && password.length >= 5 ) 
{
    console.log('password is strong enough');
}
else
{
    console.log('password is not strong enough');
    
}



//logical NOT(!)

let user = false;

if(!user)
{
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);


//break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for (let index = 0; index < scores.length; index++) {

    if(scores[index] === 0)
    {
        continue; //ignores zero and continues with iteration
    }

    console.log('your score is ', scores[index]);
    
    if (scores[index] === 100) 
    {
        console.log('congrats, you got the top score');
        break; // stops at the specified value in the iteration
    }
}


//switch statements
const grade= 'A';

switch(grade)
{
    case 'A':
        console.log('you got an A');
        break;
    case 'B':
        console.log('you got an A');
        break;
    case 'C':
        console.log('you got an A');
        break;
    case 'D':
        console.log('you got an A');
        break;
    case 'E':
        console.log('you got an A');
        break;
    default:
        console.log('invalid grade');
}





//variables & block scopes
//global and local
let age = 25;

if(true)
{
    let age = 26;
    const name = 'happy';
    console.log('inside 1st code block: ', age, name);

    if(true)
    {
        const age= 27;
        console.log('inside nested block: ', age, name);
    }
}

console.log('outside code block: ', age, name);