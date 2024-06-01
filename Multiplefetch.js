const url1 = "https://jsonplaceholder.typicode.com/todos/1";

const url2 = "https://jsonplaceholder.typicode.com/posts/1";

async function combine(url1, url2) {
  const data1 = await fetch(url1);
  const resp = await data1.json(); //  "await" fetches each URL one after the other

  const data2 = await fetch(url2);
  const resp2 = await data2.json(); //"await" fetches each URL one after the other

  const combine2 = {
    todo: resp,
    post: resp2,
  };
  console.log(combine2);
}
console.log(combine(url1, url2));

// const url1 = "https://jsonplaceholder.typicode.com/todos/1";

// const url2 = "https://jsonplaceholder.typicode.com/posts/1";

// async function combine2(){

// const [data1 ,data2]= fetch(url1,url2)
// const [res1,res2]=data1

// }
