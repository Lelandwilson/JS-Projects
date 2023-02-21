/*jshint esversion: 6 */
//gridTraveller example

//O(m * n) time complexity
// m = no. rows, n= no. cols

const gridTraveler = (m, n, memo = {}) => {
	const key = m + ',' + n;
	if (key in memo) return memo[key];

	// are the args in the memo?
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;

	memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n-1, memo);
	return memo[key];

};

console.log(gridTraveler(1,1)); //1
console.log(gridTraveler(2,1)); //1
console.log(gridTraveler(3,3)); //3
console.log(gridTraveler(10,10)); //48620
console.log(gridTraveler(20,20)); //35345263800