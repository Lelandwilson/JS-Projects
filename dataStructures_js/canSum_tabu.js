/*jshint esversion: 6 */

// Use tabulation to determine if a targetSum can be made from a set of numbers

//time complexity = O(m * n);

//length of array req is targetSum + 1
// m = targetSum
// n = numbers.length


const canSum = (targetSum, numbers) =>{
	const table = Array(targetSum + 1).fill(false);
	table[0] = true;

	for(let i=0; i<=targetSum; i++){
		if(table[i] === true) {
			//look ahead if index = true
			for (let num of numbers){
				table[i + num] = true;

			}
		}	
	}
	return table[targetSum];
};



console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(300, [7, 14]));