function Solve(val) {
    var v = document.getElementById('output');
    v.value += val;
 }
 function Answer() {
    var num1 = document.getElementById('output').value;
    try {
       var num2 = eval(num1.replace('x', '*'));
       document.getElementById('output').value = num2;
    } catch {
       document.getElementById('output').value = 'Error';
    }
 }
 function Clear() {
    var inp = document.getElementById('output');
    inp.value = '';
 }
 function Del() {
    var ev = document.getElementById('output');
    ev.value = ev.value.slice(0, -1);
 }
 document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
       Result();
    } else if (key === 'Backspace') {
       Back();
    } else if (key.toLowerCase() === 'c') {
       Clear();
    }
 });