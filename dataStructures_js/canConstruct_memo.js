/*jshint esversion: 6 */


//return true if a target string can be made from partial strings from wordBank
//only requires a single true to satisfy

// time complexity = O(n * m^2)

const canConstruct = (target, wordBank, memo = {}) => {
	if(target in memo) return memo[target];
	if(target === '') return true;

	for (let word of wordBank) {
		//using matching prefixes

		if (target.indexOf(word) === 0){
			const suffix = target.slice(word.length);
			if (canConstruct(suffix, wordBank) === true){
				memo[target] =  true;
				return true;
			}
		}
	}
	memo[target] = false; 
	return false;
	

};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(canConstruct("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqA", [ 
	"q",
	"qqqq",
    "qqqqqq",
    "qqqqqqqq", 
	"aaa"]));   //false