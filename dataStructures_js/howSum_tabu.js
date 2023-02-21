/*jshint esversion: 6 */

// time complexity = O(m^2 * n)
// tabulation, create an array of numbers from set that add up to target number

const howSum = (targetSum, numbers)=> {

	const table = Array(targetSum + 1).fill(null);
	table[0] = [];

	for(let i =0; i<= targetSum; i++){
		if(table[i] !== null){
			for(let num of numbers){
				// look ahead
				table[i + num] = [...table[i], num];
			}
		}
	}
	return table[targetSum];
};


console.log(howSum(7, [2 ,3]));
console.log(howSum(300, [7 ,14]));
