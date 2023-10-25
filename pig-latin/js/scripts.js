const vowelArray = ["a", "e", "i", "o", "u"]
const consonantArrayNoQ = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
function igPay(text) {
  if (vowelArray.includes(text[0])) {
    let result = text.concat("way");
    return result;
  } else if (consonantArrayNoQ.includes(text[0])) {
    let sliceText = text.slice(1);
    let result = sliceText.concat(text[0] + 'ay');
    return result;
  } else {
    return false;
  }
  }
// above is good!

  let consonantString = "";

  function igPay(text) {
    for (let i=0; i < text.length; i += 1) {
      console.log(text[i])
      console.log(text.length)
      if (consonantArrayNoQ.includes(text[i])) {
        consonantString = consonantString.concat(text.slice(0, i));
        console.log(consonantString);
      }  return consonantString;
      }}
  