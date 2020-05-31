function positive_negitive(x,y){
    if((x<0 && y>0) || (x>0 && y<0))
        return true;
    else
        return false;
}

console.log(positive_negitive(2,2));
console.log(positive_negitive(-2,2));
console.log(positive_negitive(2,-2));
console.log(positive_negitive(-2,-2));
