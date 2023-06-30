//callback functions --- are functions passed as an argument in another function

let people = ['happy', 'cecil', 'faith','luigi'];

const logPerson = (person, index)=>
{
    console.log(`${index} hello ${person}`);
}

people.forEach(logPerson); //function passed as an argument





let people_ = ['happy', 'cecil', 'faith','luigi'];

people_.forEach(function(person, index) {//function passed as an argument
    console.log(index, person);
});

