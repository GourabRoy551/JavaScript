function getFormvalue(e){
    var x = document.getElementById("form1");
    for(var i=0;i<x.length;i++){
        if(x.elements[i].value!='Submit'){
            document.write(x.elements[i].value);
        }
    }

    // console.log(x.elements[1].type);
}
