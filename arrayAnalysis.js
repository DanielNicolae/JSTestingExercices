function analyzeArray(arr) {
  let obj = {};
  const average = () => {
    let sum = 0;
    for (let i in arr) {
      sum += arr[i];
    }
    return (sum / arr.length);
  };
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const len = arr.length;
  obj.average = average();
  obj.min = min;
  obj.max = max;
  obj.length = len;
  return obj;
}

module.exports = analyzeArray;