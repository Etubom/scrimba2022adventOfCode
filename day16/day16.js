/**
 * Insert Dashes
 * 
 * Transform a given sentence into a new one with dashes between each
 * two consecutive letters
 * For inputString = "aba caba", the output should be insertDashes(inputString)
 * = "a-b-a c-a-b-a"
 */

 function insertDashes(arr) {
    // write code here
  return  arr.split('').slice().join('-').replace("- -", ' ')
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});