/*jshint esversion: 6 */

const countDown = (curNum, endNum) => {
	if(isNaN(curNum)|| isNaN(endNum)) {
		console.log("Invlaid input");
		return ;
	}

	if(curNum >= endNum){
		return curNum;
	}
	else{
		curNum ++;
		countDown(curNum, endNum);

	}
	console.log(curNum);
};




countDown(0, 10);
countDown("a", "b");





