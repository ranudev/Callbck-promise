//USING ASYNC AWAIT

//const url = "https://jsonplaceholder.typicode.com/todos/1";
// async function gettext(url) {
//   let obj = await fetch(url);
//   let obj2 = await obj.json();
//   console.log(obj2);
// }
// gettext(url);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++:)))

//using PROMISE
const url = "https://jsonplaceholder.typicode.com/todos/1";

function gettext(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
    });
}

gettext(url);
