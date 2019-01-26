//выводит значения window
function printWindowValues() {
  console.log(window);
}

printWindowValues();

//возводит в десятую степень
function expTen(x) {
  var a = 1;
  var exp = 0;
  while (exp < 10) {
    a = a * x;
    exp++;
  }
  return a;
}

console.log(expTen(5));

function log(x) {
  return x;
}

function getFunc(fuc, x) {}

getFunc(console.log, "Hello, World!");
