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

//выводит в консоли Hello, World!    
// function getFuncRes(func,x) {
//   var console = func (x);
//   return console;
      
//   function func (x) {
//     console.log(x);
//   }
// }
    
// getFuncRes(console.log, "Hello, World!")
    
function getFuncRes(func,x) {
  var console = func (x);
  return console;

  function func (x) {}
}
    
getFuncRes(console.log, "Hello, World!")
