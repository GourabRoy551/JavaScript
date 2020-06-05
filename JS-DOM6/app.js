function changeContent(){
    rn = window.prompt("Input the Row number(0,1,2)","0");
    cn = window.prompt("Input the Column number(0,1,)","0");
    Content = window.prompt("Input the cell content");

    var x = document.getElementById('myTable').rows[parseInt(rn,10)].cells;

    x[parseInt(cn,10)].innerHTML = content;
}