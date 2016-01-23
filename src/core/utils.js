function randomIntExclusive(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; 
}


function randomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}


function chooseFrom(arr) {
  let i = randomIntExclusive(0, arr.length);
  return arr[i];
}


function isInteger(n) {
  return typeof n === 'number' &&
    isFinite(n) &&
    Math.floor(n) === n;
}


function filledArray(size, fillValue) {
  return Array.apply(null, Array(size)).map(function () {
    return fillValue;
  });
}


function startsWithVowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.indexOf(str.substr(0, 1).toLowerCase()) >= 0;
}


export  {
  randomIntExclusive,
  randomIntInclusive,
  chooseFrom,
  isInteger,
  filledArray,
  startsWithVowel
};
