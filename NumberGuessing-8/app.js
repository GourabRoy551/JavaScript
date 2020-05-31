//Get a random interger from 1 to 10 inclusive
const num = Math.ceil(Math.random()*10);
console.log(num);

const gnum = prompt('Guess the number between 1 and 10 inclusive');
if(gnum == num)
    console.log('Matched');
else
    console.log('Not matched, the num was ' +num);