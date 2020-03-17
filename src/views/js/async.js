//async 返回Promise
async function fun() {
  //   console.log("async:");
  return new Promise(res => {
    setTimeout(() => {
      console.log("async:");
      res();
    });
  });
}
async function test() {
  console.log("begin---");
  await fun();
  console.log("end---");
}
// test();
///
console.log("begin---");
await fun();
console.log("end---");

////
async function test2() {
  console.log("test2");
  return "test2-val";
}
console.log("begin---");
// console.log(test2());
test2().then(res => {
  console.log(res);
});
console.log("end---");

///
let r = new Promise(res => {
  res(1);
}).then(res => {
  return 2;
});
console.log(r);
///

let asyncFuns = [
  new Promise(res => {
    setTimeout(() => {
      console.log("promise-1");
    });
  }),
  new Promise(res => {
    setTimeout(() => {
      console.log("promise-2");
    });
  }),
  new Promise(res => {
    setTimeout(() => {
      console.log("promise-3");
    });
  })
];
async function test3() {
  for (let i = 0; i < asyncFuns.length; i++) {
    await asyncFuns[i];
  }
}
test3();
function test4() {
  for (let i = 0; i < asyncFuns.length; i++) {
    asyncFuns[i].then(res => {});
  }
}
