//数组扁平化
const array = [1, [2, 3], [4, [5, 6]]];
//方法一
function deepFlat(array) {
  let resultArray = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
      resultArray = resultArray.concat(deepFlat(item));
    } else {
      resultArray.push(item);
    }
  });
  return resultArray;
}
deepFlat(array);

//方法二
array.flat(2);
Array.isArray(array.flat(2));
array.flat(Infinity);
//方法三
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
}
flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
