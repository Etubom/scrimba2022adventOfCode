//given an array of strings,sort them in order of increasing length,thier relastive orser
//must be same as initial array
function sortByLength(strs) {
    //  write code here.
    return strs.slice().sort((a, b) => a.length - b.length)
}



/**
* Test Suite 
*/
describe('sortByLength()', () => {
    it('sorts the strings from shortest to longest', () => {
        // arrange
        const strs = ["abc", "", "aaa", "a", "zz"];
        
        // act
        const result = sortByLength(strs);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
    });
});