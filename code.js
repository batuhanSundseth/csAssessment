//O(n log n)
function addToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return true
      }
    }
  }
  return false
}

//O(n log n)
function hasUniqueChars(str) {
  let strArr = str.split('')
  for (let i = 0; i < strArr.length; i++) {
    for (let j = i + 1; j < strArr.length; j++) {
      if (strArr[i] == strArr[j]) {
        return false
      }
    }
  }
  return true
}

//O(n)
function isPanagram(str) {
  let a = false,
  b = false,
  c = false,
  d = false,
  e = false,
  f = false,
  g = false,
  h = false,
  i = false,
  j = false,
  k = false,
  l = false,
  m = false,
  n = false,
  o = false,
  p = false,
  q = false,
  r = false,
  s = false,
  t = false,
  u = false,
  v = false,
  w = false,
  x = false,
  y = false,
  z = false
  let strArr = str.toLowerCase().split('')
  for (let iT = 0; iT < strArr.length; iT++) {
    if (strArr[iT] == 'a') {
      a = true
    }
    if (strArr[iT] == 'b') {
      b = true
    }
    if (strArr[iT] == 'c') {
      c = true
    }
    if (strArr[iT] == 'd') {
      d = true
    }
    if (strArr[iT] == 'e') {
      e = true
    }
    if (strArr[iT] == 'f') {
      f = true
    }
    if (strArr[iT] == 'g') {
      g = true
    }
    if (strArr[iT] == 'h') {
      h = true
    }
    if (strArr[iT] == 'i') {
      i = true
    }
    if (strArr[iT] == 'j') {
      j = true
    }
    if (strArr[iT] == 'k') {
      k = true
    }
    if (strArr[iT] == 'l') {
      l = true
    }
    if (strArr[iT] == 'm') {
      m = true
    }
    if (strArr[iT] == 'n') {
      n = true
    }
    if (strArr[iT] == 'o') {
      o = true
    }
    if (strArr[iT] == 'p') {
      p = true
    }
    if (strArr[iT] == 'q') {
      q = true
    }
    if (strArr[iT] == 'r') {
      r = true
    }
    if (strArr[iT] == 's') {
      s = true
    }
    if (strArr[iT] == 't') {
      t = true
    }
    if (strArr[iT] == 'u') {
      u = true
    }
    if (strArr[iT] == 'v') {
      v = true
    }
    if (strArr[iT] == 'w') {
      w = true
    }
    if (strArr[iT] == 'x') {
      x = true
    }
    if (strArr[iT] == 'y') {
      y = true
    }
    if (strArr[iT] == 'z') {
      z = true
    }
  }
  if (a == true && b == true && c == true && d == true && e == true && f == true && g == true && h == true && i == true && j == true && k == true && l == true && m == true && n == true && o == true && p == true && q == true && r == true && s == true && t == true && u == true && v == true && w == true && x == true && y == true && z == true) {
    return true
  }
  return false
}

//O(n log n)
function findLongestWord(arr) {
  let largestLength = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length ; j++) {
      arr[i] = arr[i].split('')
      arr[j] = arr[j].split('')
      if (arr[i].length > arr[j].length) {
        largestLength = arr[i].length
      }
      else
        largestLength = arr[j].length
    }
  }
  return largestLength
}

console.log(addToZero([1, -1]))
console.log(hasUniqueChars("Monday"))
console.log(isPanagram("The quick brown fox jumps over the lazy dog!"))
console.log(findLongestWord(["hi", "hello"]))