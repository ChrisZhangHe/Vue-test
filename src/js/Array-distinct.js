//数组去重
let array = [1, 2, 3, 3, 4];
//方法一
let distinctArray = new Set(array);
Array.isArray(array); //false

//方法二
function distinct(array) {
  let result = [];
  array.forEach(val => {
    if (!result.includes(val)) {
      result.push(val);
    }
  });
  return result;
}

distinct(array);
//方法三

