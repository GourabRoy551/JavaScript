var side1 = 5;
var side2 = 6;
var side3 = 7;

var s = (side1+side2+side3)/2;

var n = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));

var area = n.toFixed(2);

console.log(area);