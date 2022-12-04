/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/
const whisper = str => {
    const shh = "shh..."
    if(!str.endsWith('!')){
        return `${shh} ${str.toLowerCase().slice(0)}`
    }
    return `${shh} ${str.toLowerCase().slice(0, -1)}`
}
console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));
console.log(whisper("THE KITTENS are SLEEPING!"));