///in function,this refers to global object
// console.log(myFunction());
// function myFunction() {
//     return this;
//   }


////strict mode does not allow default binding
////so,when used in a function ,in strict mode,this is undefined
// "use strict";
// console.log(myFunction());
// function myFunction() {
//   return this;
// }

