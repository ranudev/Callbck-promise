const books = [
  { title: "hello", author: "abc", year: 3003 },
  { title: "jello", author: "def", year: 3001 },
  { title: "fello", author: "ghi", year: 3002 },
];

function list(books, callback) {
  //function which take a callback
  let obj2 = books.map((obj) => {
    return obj.title;
  });

  callback(obj2);
}

function arrange(obj2) {
  // it is a CALBACK function  where we apply a logic
  const obj3 = obj2.sort();
  console.log(obj3);
}
list(books, arrange);
