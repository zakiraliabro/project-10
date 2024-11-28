function add(){
    let firstvalue = +document.getElementById("First-Value").value;
    let secondvalue = +document.getElementById("Second-Value").value;
    let result = firstvalue + secondvalue;
    alert(result);
}
function multi(){
    let firstvalue = +document.getElementById("First-Value").value;
    let secondvalue = +document.getElementById("Second-Value").value;
    let result = firstvalue * secondvalue;
    alert(result);
}function sub(){
    let firstvalue = +document.getElementById("First-Value").value;
    let secondvalue = +document.getElementById("Second-Value").value;
    let result = firstvalue - secondvalue;
    alert(result);
}function divide(){
    let firstvalue = +document.getElementById("First-Value").value;
    let secondvalue = +document.getElementById("Second-Value").value;
    let result = firstvalue % secondvalue;
    alert(result);
}