//*
//SORU1
let wordReversed;
const Reverse1 = (word) => {
  wordReversed = word.split("").reverse().join("");
  return wordReversed;
};

const word1 = "Clarusway Rocks!";
const word2 = "Happy";

console.log(Reverse1(word1));
console.log(Reverse1(word2));

//*
//SORU2
let reversedList;
const characters = (listOfCharacters) => {
  reversedList = listOfCharacters.reverse();
  return reversedList;
};

console.log(characters(["t", "e", "m", "h", "A"]));

//*
//SORU3
let lastArray;
const Arrays = (arrayInput1, arrayInput2) => {
  lastArray = arrayInput1.concat(arrayInput2);
  lastArray.sort((a, b) => a - b);
  return lastArray;
};

let array1 = [15, 24, 3, 8, 9, 12, 21];
let array2 = [72, 34, 52, 1, 51, 44, 33, 75];

console.log(Arrays(array1, array2));
