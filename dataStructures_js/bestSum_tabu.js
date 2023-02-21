/*jshint esversion: 6 */

// Time complexity = O(m^2 * n)
// Tabulation, find smallest combination of numbers from numbers to sum upto targetSum

const bestSum = (targetSum, numbers)=> {

	const table = Array(targetSum + 1).fill(null);
	table[0] = [];

	for(let i =0; i<= targetSum; i++){
		if(table[i] !== null){
			for(let num of numbers){
				const combination = [...table[i], num];
				//if combination is shorter than what is already stored
				if(!table[i +num] ||table[i + num].length > combination.lenth){
					table[i + num] = combination;
				}
			}
		}
	}
	return table[targetSum];
};

console.log(bestSum(7, [2 ,3]));
console.log(bestSum(7, [5 ,3, 4, 7]));
console.log(bestSum(300, [7 ,14]));
console.log(bestSum(100, [1 ,2, 5, 25]));
