/*jshint esversion: 6 */

const countUp =  (curNum, endNum) => {

	if(isNaN(curNum) || isNaN(endNum)){
		console.log("Invalide inputt");
		return
	}

	if(curNum >= endNum){
		return curNum;
	}
	else{
		endNum --;
		countUp(curNum, endNum);
	}



	console.log(endNum +1);
};

countUp(0, 10);
countUp('a', 'c');