function split(wholeArray) {
	const half = Math.floor(wholeArray.length / 2)
	
	if (wholeArray.length <= 1 ) {
		return wholeArray
	}

	//debugger

	let firstHalf = wholeArray.slice(0, half)
	let secondHalf = wholeArray.slice(half)

/* your code here to define the firstHalf and secondHalf arrays */
	

	return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) { //[[3, 2], [1, 5, 6]
	// let sortedArr = []

	// while (firstHalf.length && secondHalf.length) {
		
	// 	if(firstHalf[0]>secondHalf[0]){
	// 		sortedArr.push(secondHalf.shift()) 
	// 	}else{
	// 		sortedArr.push(firstHalf.shift())
	// 	}
	// }	
	// return sortedArr.concat(firstHalf,secondHalf)

	var i = 0;
	var j = 0;
	var sortedArr = [];

	// firstHalf = [1, 3];
	//secondHalf = [6, 9, 8]

	while (i < firstHalf.length || j < secondHalf.length) {

		if (i === firstHalf.length) {
			// j is the only index firstHalf
			sortedArr.push(secondHalf[j]);
			j++;
		}
		else if (j === secondHalf.length || firstHalf[i] <= secondHalf[j]) {
			sortedArr.push(firstHalf[i]);
			i++;
		} else {
			sortedArr.push(secondHalf [j]);
			j++;
		}


	}
   // console.log('FROM MERGE => ', sortedArr)

	return sortedArr;
}


function mergeSort(wholeArray) {
	
	let finalArr;
	let left;
	let right;

	if (wholeArray.length === 1) {
		return wholeArray
	} else {
	  [left, right] = split(wholeArray)
	}
	
	console.log('mergeSort(left) ==> ', mergeSort(left), 'mergeSort(right) ==> ', mergeSort(right), `\n`)

	

	
	return (merge(mergeSort(left), mergeSort(right)))


	

	


	// finalArr = mergeSort(split(wholeArray));
	



	

}