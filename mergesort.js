function split(wholeArray) {
	const half = Math.floor(wholeArray.length / 2)
	
	if (wholeArray.length <= 1 ) {
		return wholeArray
	}

	let firstHalf = wholeArray.slice(0, half)
	let secondHalf = wholeArray.slice(half)

	/* your code here to define the firstHalf and secondHalf arrays */

	return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) { //[[3, 2], [1, 5, 6]
	let sortedArr = []

	while(firstHalf.length && secondHalf.length){

		if(firstHalf[0]>secondHalf[0]){
			sortedArr.push(secondHalf.shift()) 
		}else{
			sortedArr.push(firstHalf.shift())
		}
	}	
	return sortedArr.concat(firstHalf,secondHalf)

}

function mergeSort(wholeArray) {
	
	let [firstHalf, secondHalf] = split(wholeArray);
	let finalArr;
	console.log('first', firstHalf)
	console.log('second', secondHalf)
	let fl = firstHalf.length
	let sl = secondHalf.length

	console.log(merge(firstHalf, secondHalf))
	// while(fl && sl){
	// 	finalArr = mergeSort(merge(firstHalf, secondHalf))
	// 	// fl --
	// 	sl --
	// }

	return finalArr
	// return mergeSort(merge(split(wholeArray)[0], split(wholeArray)[1])); //[[3, 2], [1, 5, 6]


	// return (
	// 	mergeSort(merge(firstHalf, secondHalf))// takes two arrats
			
	// )

}