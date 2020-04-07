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

function merge(firstHalf, secondHalf) {

	

}

function mergeSort(wholeArray) {

	return (
		mergeSort(
			merge(
				
				split(wholeArray)[0], 
				split(wholeArray)[1]
				
			)
			
		
		)
	)

}