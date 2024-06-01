function accptstring(name, callback) {
  callback(name);
}
function manipulate(name) {
  let b = name.toUpperCase();
  console.log(b);
}
accptstring("heeloo", manipulate);
