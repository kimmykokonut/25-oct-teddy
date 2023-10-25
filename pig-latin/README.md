Describe: igPay()

Test: "It will recognize a vowel in the first character of a string."
Code: igPay(apple)
Expected output: true
-
Test: "It will add 'way' to the end of words that begin with a single vowel."
Code: igPay(okay)
Expected Output:okayway 
-
Test: "For words that start with a single consonant, it will remove the consonant."
Code: igPay(code)
Expected Output: ode
-
Test: "For words that start with a single consonant, it will move the consonant to the end of the word."
Code: igPay(code)
Expected Output: odec 
-
5Test: For words that start with a single consonant, it will move the consonant to the end of the word and add 'ay'."
Code: igPay(code)
Expected Output: odecay 
-
Test: "For words that start with multiple consonants, it will move the consonants to the end of the word."
Code: igPay(string)
Expected Output: ingstr

Test: "For words that start with multiple consonants, it will move the consonants to the end of the word and add 'ay'."
Code: igPay(string)
Expected Output: ingstray

Test: "For words that start with 'qu', it willl move the 'qu' to the end of the word."
Code: igPay(quidditch)
Expected Output: idditchqu

Test: "For words that start with 'qu', it willl move the 'qu' to the end of the word and add 'ay'."
Code: igPay(quidditch)
Expected Output: idditchquay

Test: "For words that start with 'squ', it will move the 's' tp the end of the word." 
Code: igPay(squeal)
Expected Output: queals

Test: "For words that start with 'squ', it will move the 's' to the end of the word and add 'ay'."
Code: igPay(squeal)
Expected Output: quealsay

Test: "It will move the first letters of a word regardless of capitalization." 
Code: igPay(Code)
Expected Output: odecay 

Test: "It will ignore non-letter characters.
Code: igPay($money)
Expected Output: $oneymay

Test: 
Code: 
Expected Output: 