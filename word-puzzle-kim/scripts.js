//Create a website that uses a method to replace vowels in a string with the dash symbol "-" to create a word puzzle to solve. Hide the original string when you show the resulting word puzzle, so that another person can try and guess it.

let strInput = "Believe you can and you're halfway there. Theodore Roosevelt";

function replaceVowels(strInput) {
  const vowelArray = ["a", "e", "i", "o", "u"];
  let strArray = strInput.split(''); //turns str to array
  let newArray = [];

  if (Array.isArray(strArray) && strArray.length > 0) {
    for (let i = 0; i < strArray.length; i++) {
      if (vowelArray.includes(strArray[i])) {
        newArray.push('-');
      } else {
        newArray.push(strArray[i]);
      }
    }
  } 
  return newArray.join(' ');
}