/*jshint esversion: 6 */


//return number of ways to construct the target string using the wordBank for substrings

// time complexity = O(n * m^2)

const countConstruct = (target, wordBank, memo = {}) =>{
	//base cases
	if (target in memo) return memo[target];
	if (target === '') return 1;

	let totalCount = 0;

	for (let word of wordBank){
		if(target.indexOf(word) === 0){
			const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
			totalCount += numWaysForRest;
		}
	}





memo[target] = totalCount; 
return totalCount;
};


console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(countConstruct("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqA", [ 
	"q",
	"qqqq",
    "qqqqqq",
    "qqqqqqqq", 
	"aaa"]));   //false