describe('Bubble Sort', function () {
	arrayA = [8,9,5,1,2,3,7]

	it('handles an empty array', function () {
		expect(bubbleSort([])).toEqual([]);
	});


	it('It returns an array', function () {
		expect(Array.isArray(bubbleSort([]))).toEqual(true);
	});


	it('It returns a sorted array', function () {
		expect(bubbleSort(arrayA)).toEqual([1,2,3,5,7,8,9]);
	});
});