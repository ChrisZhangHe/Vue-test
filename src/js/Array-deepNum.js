//获取数组最大深度
let array = [1, [2, 3], [4, [5, 6, [7]]]];
//方法一
function getMaxFloor(treeData) {
  let floor = 0;
  let max = 0;
  function each(data, floor) {
    data.forEach(e => {
      if (floor > max) {
        max = floor;
      }
      if (e.length > 0) {
        each(e, floor + 1);
      }
    });
  }
  each(treeData, 1);
  return max;
}
//方法二
function getArrayDeepMax(array) {
  let max = 0;
  function getMax(arr, deepIndex) {
    max = Math.max(max, deepIndex);
    if (Array.isArray(arr)) {
      arr.forEach(val => {
        getMax(val, deepIndex + 1);
      });
    }
  }
  getMax(array, 0);
  return max;
}
getArrayDeepMax(array);
