function findSecondLargest(arr) {
    let first, second;
    if (arr.length < 2) {
        return "Invalid Input";
    }
    arr.sort();
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] !== arr[arr.length - 1]) {
            return "The second largest element is " + arr[i];
        }
    }

    return "There is no second largest element";
}
const arr = [12, 35, 10, 35, 10, 34, 1];
console.log(findSecondLargest(arr)); 
