/*jshint esversion: 6 */


//return array of all combinations that make target from wordbank

//time complexity = O(n ^ m)

const allConstruct = (target, wordBank, memo = {}) => {
	if(target in memo) return memo[target];
	if(target === '') return [[]];

	const result = [];

	for (let word of wordBank){
		if(target.indexOf(word) === 0){
			const suffix = target.slice(word.length);
			const suffixWays = allConstruct(suffix, wordBank, memo);
			const targetWays = suffixWays.map(way => [word, ...way]);
			result.push(...targetWays);
		}
	}
	memo[target] = result;
	return result;
};



console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaX', ['a', 'p', 'aaaa', 'aa', 'aaaaaa']));