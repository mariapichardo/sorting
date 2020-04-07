describe('Split Array function', function () {
	let arrA = [1,3,6,7,8]

	it('is able to split an array into two halves', function () {
		expect(split(arrA)).toEqual([[1,3], [6,7,8]])
		
	});

	it('It handle empty array', function () {
		expect(split([])).toEqual([])

	});
});
	
// describe('Merge function', function () {
// 	let arrA = [1,3,5];
// 	let arrB = [2,4,6]

// 	it('is able to merge two sorted arrays into one sorted array', function () {
// 		expect(merge(arrA, arrB)).toEqual([2,6])
// 	});
// });

describe("mergeSort function", function() {
  let arr = [8, 7, 6, 2, 1]

  it("is able to merge sort one array", function() {
	  expect(mergeSort(arr)).toEqual([1,2,6,7,8]);
  });
});
