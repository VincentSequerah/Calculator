const display = document.getElementById('output');


function append(input){
    display.value += input;
 }

function cle(){
   display.value = '';
}

function del(){
   display.value = display.value.slice(0, -1);
}



function answer() {
    try {
      display.value = eval(display.value.replace('x', '*'));
    } catch {
       display.value = 'Error';
    }
 }