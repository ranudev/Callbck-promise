// let promise = new promise(function (resolve, reject) {

//      myName=(name) =>{
//         const name = "Ram";
//         return name;
//       }

// })
// ;
// console.log(promise);

function myName(name) {
  return new Promise((resolve, reject) => {
    if (typeof name === "string") {
      resolve(`Hello ${name}`);
    } else {
      reject("error");
    }
  });
}
const name = "Ram";
myName(name)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
