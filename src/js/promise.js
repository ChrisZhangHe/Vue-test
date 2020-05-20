new Promise((res, rej) => {
  setTimeout(() => {
    // res("setTimeout");
    // rej("setTimeout-rej");
  }, 1000);
})
  .then(
    res => {
      //返回异步操作结果
      let promise = new Promise(thenRes => {
        setTimeout(() => {
          thenRes(6);
        }, 1000);
      });
      //   return promise;
    },
    rej => {
      console.log("then1-rej:", rej);
      return "then1-rej-val-123";
    }
  )
  .then(
    res => {
      console.log("then2-res:", res);
    },
    rej => {
      console.log("then2-rej:", rej);
    }
  );

//执行顺序，Promise新建后立即执行
console.log("begin");
setTimeout(
  val => {
    console.log(val);
  },
  0,
  "setTimeout-end"
);
new Promise(res => {
  console.log("promise-begin");
  setTimeout(() => {
    res();
  }, 0);
}).then(res => {
  console.log("promise-end");
});
console.log("同步执行结束");

//异常处理
//promise异常不会终止程序执行，用catch取代reject
console.log("start");
new Promise((res, rej) => {
  // x + 1;
  res("resVal");
})
  .then(res => {
    // x + 1;
    console.log("res:", res);
  })
  .then(res => {
    console.log("then-end");
    y + 1;

    res();
  })
  .catch(err => {
    console.log("err:", err);
  });

console.log("end");

//promise.all

let promise1 = new Promise(res => {
  setTimeout(() => {
    res("promise-1");
  }, 2000);
});
let promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("promise-2");
  }, 1000);
});
Promise.all([promise1, promise2])
  .then(res => {
    console.log("all:", res);
  })
  .catch(e => {
    console.log("catch:", e);
  });

console.log(1);
var p = new Promise((res, rej) => {
  console.log(2);
  res(1);
});
console.log(3);
p.then(r => {
  console.log(5);
  // console.log(r);
});
console.log(4);
