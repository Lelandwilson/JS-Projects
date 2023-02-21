/*jshint esversion: 6 */

// Grid traveler via tabulation 

// time complexity o(m*n)


const gridTraveler = (m,n) => {
	const table = Array(m + 1).fill()
	.map(() => Array(n+1).fill(0)); //initial values thoughout table

	table[1][1] = 1;
	
	for(let i= 0; i<=m; i++){ //i is columns
		for(let j=0; j<= n; j++){ // j is rows
			const current = table[i][j];
			if(j + 1 <=n) table[i][j + 1] += current; //right neightbour
			if(i + 1 <= m) table[i + 1][j] += current; //lower neightbour
		}
	}
	return table[m][n];
};

console.log(gridTraveler(3, 2));
console.log(gridTraveler(18, 18));