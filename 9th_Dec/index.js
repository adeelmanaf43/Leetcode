// 3. Longest Substring Without Repeating Characters

// let s = "dvdf";

var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let arr2 = [];

  for (let i = 0; i <= s.length - 1; i++) {
    if (arr.indexOf(s[i]) === -1) {
      arr.push(s[i]);
      //   console.log("Array", arr);
    } else if (s[i] === s[i - 1] && i + 1 !== s.length) {
      arr2.push(arr.length);
      arr = [];
      arr.push(s[i]);
      //   console.log("What");
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === s[i]) {
          if (j !== 0) {
            arr2.push(arr.length);
            arr = arr.slice(j + 1);
            arr.push(s[i]);
            // console.log("i", i);
            // console.log("Slice", arr);
            break;
          } else {
            arr2.push(arr.length);
            arr.splice(j, 1);
            arr.push(s[i]);
            // console.log("Splice, Push", arr);
            break;
          }
        }
      }
    }
  }
  arr2.push(arr.length);
  arr2 = arr2.sort((a, b) => a - b);
  return arr2[arr2.length - 1];
};

console.log(lengthOfLongestSubstring("wobgrovw"));
