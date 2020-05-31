today = new Date();
var cmas = new Date(today.getFullYear(),11,25);

console.log(cmas);
console.log(today);

// if(today.getMonth()==11 && today.getDate()>25)
// {
//     cmas.setFullYear(cmas.getFullYear()+1);
// }

var one_day=1000*60*60*24;

console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+" day left until Christmas!!");