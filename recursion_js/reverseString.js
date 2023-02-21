/*jshint esversion: 6 */

function reverseString(str) {
   if (str === "") return "";
   else return reverseString(str.substring(1)) + str.charAt(0);
}

var string1 = "test string one";
console.log(reverseString(string1));