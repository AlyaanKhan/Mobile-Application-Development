//Array Methods
//to_String
let arr_1 = [1, 2, 3, 4];
console.log("The array to string is:: ");
console.log(arr_1.toString());
console.log("---------------------------------------------------")
// Join
console.log("The joined array is:: ");
console.log(arr_1.join("*"));
console.log("---------------------------------------------------")
// Push and Pop
console.log("The pushed element is:: ");
console.log(arr_1.push(5));
console.log("The pushed array is:: ");
console.log(arr_1);
console.log("---------------------------------------------------")
console.log("The popped element is:: ");
console.log(arr_1.pop());
console.log("The popped array is:: ");
console.log(arr_1);
console.log("---------------------------------------------------")
// concat
let arr2 = [5,6,7,7,8];
console.log("The concated array is:: ");
console.log(arr_1.concat(arr2));
console.log("---------------------------------------------------")
// filter
var result = arr_1.filter((num) => num % 2 === 0 );
console.log(result);
console.log("---------------------------------------------------")
// Reduce and Map
function reducer(x, y){
    return x + y;
}
function sum_of_digit(digit){
var digit_array = digit.split("").map(Number);// string to array
console.log("The sum is:: ")
console.log(digit_array.reduce(reducer));// Prints Sum
}
sum_of_digit("23618"); // function call
console.log("---------------------------------------------------")