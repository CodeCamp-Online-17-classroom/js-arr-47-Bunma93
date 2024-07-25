// write code here
let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

function copySorted(arr) {
    return arr2 = arr.slice().sort();
};

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
