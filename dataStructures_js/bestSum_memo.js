/*jshint esversion: 6 */

//3) Optimization problem

//return shortest array that adds up to targetSum
//requires trying all possibilities

//time complexity = O(m^2 * n)

const bestSum = (targetSum, numbers, memo={}) => {
	//base casees
	if(targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	let shortestCombination = null;

	for(let num of numbers){
		const remainder = targetSum - num;
		const remainderCombination = bestSum(remainder, numbers, memo);

		if(remainderCombination !== null){
			const combination = [...remainderCombination, num];
			if(shortestCombination === null || 
				combination.length < shortestCombination.length){

				shortestCombination = combination;
			}
		}
	}
	memo[targetSum] = shortestCombination;
	return shortestCombination;
};

console.log(bestSum(7, [5,3,4,7])); //[7]
console.log(bestSum(8, [2,3,5])); //[3, 5]
console.log(bestSum(9, [1,4,5])); //[4, 4]
console.log(bestSum(100, [1,2,5,25])); //[25, 25, 25, 25]
