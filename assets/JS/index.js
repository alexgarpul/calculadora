function takeValue(x) {
    document.getElementById('result')
}
function clearInput(){
    document.getElementById('result')
}
function calculateResult(){
    let result = eval(document.getElementById('result').innerHTML);
    document.getElementById('result').innerHTML = result;
}

let coma = document.getElementById('coma')
let cero = document.getElementById('cero')
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')
let equal = document.getElementById('equal')
let deleteN = document.getElementById('delete')

cero.addEventListener("click", function(){
    takeValue(0);
})
one.addEventListener("click", function(){
    takeValue(1);
})
two.addEventListener("click", function(){
    takeValue(2);
})
three.addEventListener("click", function(){
    takeValue(3);
})
four.addEventListener("click", function(){
    takeValue(4);
})
five.addEventListener("click", function(){
    takeValue(5);
})
six.addEventListener("click", function(){
    takeValue(6);
})
seven.addEventListener("click", function(){
    takeValue(7);
})
eight.addEventListener("click", function(){
    takeValue(8);
})
nine.addEventListener("click", function(){
    takeValue(9);
})

plus.addEventListener("click", function(){
    takeValue("+");
})
minus.addEventListener("click", function(){
    takeValue("-");
})
multiply.addEventListener("click", function(){
    takeValue("*");
})
divide.addEventListener("click", function(){
    takeValue("/");
})
equal.addEventListener("click", function(){
    calculateResult();
})
deleteN.addEventListener("click", function(){
    clearInput();
})
