var a = 2;
function foo() {
  console.log(a);
  var a = 3;
  console.log(a);
}

foo();
