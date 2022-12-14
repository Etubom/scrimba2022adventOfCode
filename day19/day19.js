// Given a year, return the century it is in.The first century spans from year 1
// up to and including the year 100, the second - from the year 101 up to
// and including the year 200 etc 

// Example
// For year = 1905, the output should be centuryFromYear(year) = 20
// For year = 1700, the output should be centuryFromYear(year) = 17

function centuryFromYear(num) {
    //  write code here.
    return Number.isInteger(num / 100) ? num / 100 : Math.floor(num /100)+1;
}

/*
* Test Suite 
*/ 
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
});