/**
 * n children have got m pieces of candy.They want to eat as much candy as possible
 * but eacah child must eat exactly same amount as others.Determine how
 * many pieces of candy will be eaten by all the childrn together
 * 
 * Example n=3 and m=10,the output shd be candies(n,m)=9
 * Eaach child will eat 3 pieces. So the answer is 9
 */



function candies(children, candy) {
    //  write code here.
   return Math.floor(candy/children) * children
}



/**
* Test Suite 
*/
describe('candies()', () => {
    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;
        
        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});