function cTOF(celsious)
{
    const cTemp = celsious;
    const cToFahr = cTemp*9/5+32;
    const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;   
    console.log(message);
}

function fTOC(faherheit)
{
    const fTemp = faherheit;
    const fToCel = (fTemp-32)*5/9;
    const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
    console.log(message);
}

cTOF(60);
fTOC(45);