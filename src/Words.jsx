import wordBank from "./wordleBank.js";
import satWordsWithDefinitions from "./satWordsWithDefinitions";
import wordleBank from "./wordleBank.js";


export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];


export const generateWordSet = async () => {

  let wordsArr = [...Object.keys(satWordsWithDefinitions)];
  let definitionArr = [...Object.values(satWordsWithDefinitions)];

console.log(wordsArr);
console.log(definitionArr);

  let randNum = Math.floor(Math.random() * wordsArr.length)
  console.log(randNum)

  let todaysWord = wordsArr[randNum];
  let todaysDef = definitionArr[randNum];
  console.log("word: " + todaysWord + " / def: " + todaysDef)
  const finalWordSet = [...new Set([...wordsArr, ...wordleBank])]
  console.log(finalWordSet);
  let wordSet = finalWordSet;

  return { wordSet, todaysWord, todaysDef };
};