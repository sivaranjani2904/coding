function removeDuplicates(arr) {
    const seen = {};
    return arr.filter(value => {
        if (seen[value]) {
            return false;  
        }
        seen[value] = true;  
        return true;  
    });
}
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);  
