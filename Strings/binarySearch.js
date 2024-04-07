function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // If the target is found at the middle index
    if (arr[mid] === target) {
      return mid;
    }

    // If the target is greater than the middle element, search the right half
    if (arr[mid] < target) {
      left = mid + 1;
    }

    // If the target is smaller than the middle element, search the left half
    else {
      right = mid - 1;
    }
  }

  // If the target is not found in the array
  return -1;
}


const arr = ["Ananthu", "Vijjitha", "abhi", "rahul"];


const targetIndex = binarySearch(arr.sort(), "Vijjitha");

if (targetIndex !== -1) {
  console.log(`Index of "Vijjitha" is: ${targetIndex}`);
} else {
  console.log("Element not found in the array.");
}