var x = 0;

document.getElementById('number').innerHTML = x;

function button1() {
  
  document.getElementById('number').innerHTML = ++x;
}

function button2() {
  
  document.getElementById('number').innerHTML = --x;
}
function button() {
    document.getElementById('number').innerHTML = 0;
    
}