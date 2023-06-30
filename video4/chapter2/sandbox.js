//arguments and parameters

const greet = function(name,time) //parameters
{
    console.log(`good ${time} ${name}`);
};

greet('happy', 'morning'); //these are arguments



//default parameters
let interview = function(question='whats your stack?', experience='for how long?')
{
    console.log(`may i know ${question} and ${experience}`);
};

interview();