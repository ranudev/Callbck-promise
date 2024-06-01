let a = [2, 4, 56, 7, 5];
function num(a, callback) {
  let a1 = a;
  console.log("hello", a1);
  callback(a1);
}

function dbl(a1) {
  let a3 = a1.map((elem) => elem * 2);
  console.log(a3);
}
num(a, dbl);
