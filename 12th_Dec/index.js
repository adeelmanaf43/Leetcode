var myAtoi = function (s) {
  s2 = s.trim().split(" ");
  let stringNum = s2[0].trim();
  if (
    stringNum[0] === "+" ||
    stringNum[0] === "-" ||
    Boolean(Number(stringNum[0]))
  ) {
    if (stringNum.length === 1) {
      if (stringNum[0] === "+" || stringNum[0] === "-" || stringNum[0] == " ") {
        return 0;
      } else {
        if (Boolean(Number(stringNum[0]))) {
          return Number(stringNum);
        } else {
          return 0;
        }
      }
    } else {
      if (
        (stringNum[0] === "+" || stringNum[0] === "-") &&
        (stringNum[1] === "+" || stringNum[1] === "-")
      ) {
        return 0;
      } else {
        if (Boolean(Number(stringNum))) {
          if (Number(stringNum) < (-2) ** 31) {
            return (-2) ** 31;
          } else if (Number(stringNum) > 2 ** 31) {
            return 2 ** 31 - 1;
          } else {
            return Number(stringNum);
          }
        } else {
          return 0;
        }
      }
    }
  } else {
    if (stringNum[0] === "0" && Boolean(Number(stringNum))) {
      return Number(stringNum);
    } else {
      return 0;
    }
  }
};

let res = myAtoi("  -0012a42");
console.log(res);
