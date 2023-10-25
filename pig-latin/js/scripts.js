const vowelArray = ["a", "e", "i", "o", "u"]
function igPay(text) {
  if (vowelArray.includes(text[0])) {
    let result = text.concat("way");
    return result
  }
}



// for slicing first char later
// let sliceText = text.slice(1);