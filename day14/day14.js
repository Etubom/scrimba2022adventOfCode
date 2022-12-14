// //Count Vowel Consonant

// You are given s that consists of only lowercase english letters.If vowels
// ('a','e','i','o','u') are given a value of 1 and consonants are given a value
// of 2 return the sum of all the letters in the input string 

// Example
// For s = 'abcde', the output should be countVowelConsonants(s) = 8

function countVowelConsonant(str) {
    // write code here
    let vowels = {a:'a',e:'e',i:'i',o:'o',u:'u'}
    let count = 0;
    str.split('').map(c => {
        if (vowels[c]){
          count += 1;
        }
        if(!vowels[c]){
            count += 2;
        }
    })
    return count;
  }
  
  
  
  /**
  * Test Suite 
  */
  describe('countVowelConsonant()', () => {
      it('returns total of vowels(1) and consonants(2) to be added', () => {
          // arrange
          const value = 'abcde';
          
          // act
          const result = countVowelConsonant(value);
  
          // log
          console.log("result: ", result);
          
          // assert
          expect(result).toBe(8);
      });
  });