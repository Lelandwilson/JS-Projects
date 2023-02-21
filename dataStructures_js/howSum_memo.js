/*jshint esversion: 6 */

//2) Combinatoric Problem

//result requires atleast on valid combination, will exit after one found
//return array of numbers that are cobination to sum up to target sum;
//return empty array if not possible.

//time complexity = O(n * M ^2)

const howSum = (targetSum, numbers, memo ={}) =>{
	if(targetSum in memo) return memo[targetSum];
	if(targetSum === 0) return [];
	if(targetSum < 0) return null;

	//branching logic:
	for (let num of numbers){
		const remainder = targetSum -  num;
		const remainderResult = howSum(remainder, numbers, memo);
		if(remainderResult !== null){
			memo[targetSum] = [...remainderResult, num]; // a valid combination
			return memo[targetSum];
		}
	}
	memo[targetSum] = null;
	return null;

};



console.log(howSum(7, [2,5,4,7]));
console.log(howSum(300, [7, 14]));