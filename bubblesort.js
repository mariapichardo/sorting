function bubbleSort(arr) {


	let swapNum = 0
	let anotherSwap = true

	while (anotherSwap) {
		anotherSwap = false
		for (let i = 0; i < arr.length - swapNum; i++){

			if (arr[i] > arr[i + 1]) {
				arr = swapFun(arr, i, i + 1)
				anotherSwap = true
			}

		}
		swapNum++
	}

	return arr
	
}



function swapFun(arr, idx1, idx2) {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
	return arr;

}

