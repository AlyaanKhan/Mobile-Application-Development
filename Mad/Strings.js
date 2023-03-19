// Strings Function
// 1. length
let str1 = "Hello, My name is Alayaan "
console.log("The string is:: " + str1);
console.log("The length of string is:: " + str1.length);
console.log("---------------------------------------------------")
// 2. Slice
console.log("This is a sliced string::" );
console.log(str1.slice(7, 28));
console.log("---------------------------------------------------")
//3. Replce
console.log("The replaced string is:: ");
console.log(str1.replace("Hello", "Heyy"));
console.log("---------------------------------------------------")
//4. Lowecase and Uppercase
console.log("This is a string in uppercase:: ");
console.log(str1.toUpperCase());
console.log("This is a string in lowercase:: ");
console.log(str1.toLowerCase());
console.log("---------------------------------------------------");
//5. concat
let str2 = "and I am 21 years old." 
console.log("The concatenated string is:: ");
console.log(str1.concat(str2));
console.log("---------------------------------------------------");
//6. charAt
console.log("The character at the particular position is::  ");
console.log(str1.charAt(7));
console.log("---------------------------------------------------");
//7. charatcode
console.log("The character code (ASCII) for particular character is:: ");
console.log(str1.charCodeAt(7));
console.log("---------------------------------------------------");
//8. Split
console.log("The splitted string is:: ");
console.log(str1.split(", "));
console.log("---------------------------------------------------");
//9. StartsWith
console.log("This string starts with:: ");
console.log(str1.startsWith("H"));
console.log("---------------------------------------------------")
//10. endsWith
console.log("This string ends with:: ");
console.log(str1.endsWith("n"))
console.log("---------------------------------------------------");
//11. Trim
let str3 = "     Hi it's me";
console.log("This is a trimmed string:: ")
console.log(str3.trim());
console.log("---------------------------------------------------")