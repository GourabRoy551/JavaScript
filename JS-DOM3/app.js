function set_background(){
    docBody = document.getElementsByTagName("body")[0];

    myBodyElements = docBody.getElementsByTagName("p");

    myp1 = myBodyElements[0];
    myp1.style.background = "rgb(255,0,0)";

    myp2 = myBodyElements[1];
    myp2.style.background = "rgb(255,255,0)";

}
function undo(){
    docBody = document.getElementsByTagName("body")[0];

    myBodyElements = docBody.getElementsByTagName("p");

    myp1 = myBodyElements[0];
    myp1.style.backgroundColor = "white";

    myp2 = myBodyElements[1];
    myp2.style.backgroundColor = "white"

    console.log(myp1,myp2);
}

// docBody = document.getElementsByTagName("p");
// mp1 = docBody[0];
// console.log(mp1);