// function sum(a,b,c){
//     console.log(a+b+c);
// }
// // var a=[12,34,5]
// // sum(...a)
// sum.apply(null,[12,3,4])
// console.log(sum);

// function  sum(a,b,c) {
//     console.log(a+b+c);
    
// }
// var a=[12,3,4]
// console.log(...a);
// sum(...a)

// let arr1=[1,2,3]
// let arr2=[2,3,4]
// arr1=arr1.concat(arr2)
// console.log(arr1);

// let a=[1,2,3]
// let b=[4,5,6]
// console.log(...a,...b);

//// replace copy
//// pass of value
// let arr1=[1,2,3]
// let arr2=arr1
// arr2.push(23,4)
// console.log(arr2);
// console.log(arr1);

// let arr1=[1,2,3]
// let arr2=[...arr1,2,3]
// console.log(arr2);

////pass by refrence
// a=4
// b=5+a
// console.log(b)

// a=[1,2,3]
// b=[1,2,3]
// console.log(...a,...b);

// const numbers = [1, 2, 3, 4, 5, 6];
// const [one, two, ...rest] = numbers;
// console.log(...rest);

var e={"name":"tanu","class":"12","age":"18"}
// var p={"city":"pune","No":"four"}
var p={"name":'sneha',"class":"12","age":"18"}
var a={
    ...p,
    ...e}
console.log(e);

// var s={"tanu":"jiya","sneha":"neha"}
// var a={"raja":"nisha","vani":"mathu"}
// var k={...s,...a}
// console.log(k)