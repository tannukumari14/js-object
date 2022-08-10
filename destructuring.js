// let a,b;
// [a,b]=[34,345,2,1,3,4,8]
// console.log(a,b);//34,345
// [a,b,c,...d]=[1,2,3,4,5,6,7,8,9,10]
// console.log(a);//1
// console.log(b);//2
// console.log(c);//3
// console.log(d);///give output as array

//array destructuring
({a,b,c,...d}={a:34,b:23,c:90,d:89,e:78})
console.log(a,b,c,d);

// const fruits=["apple","banana","mango"]
// const [a,b,c]=fruits
// console.log(a,b,c);

////object descturucturing
// const laptop={
//     model:"hp",
//     age:"23 days",
//     gender:"male",
//     net:1233,
//     start :function(){console.log("stated");
//     } 
// }
// const{model,age,gender}=laptop
// console.log(model,age,gender);

// function calculate(a, b) {
//     const add = a + b;
//     const subtract = a - b;
//     const multiply = a * b;
//     const divide = a / b;
//     console.log(add, subtract, multiply, divide);
//   }
  
//   calculate(2,3)

////old version
// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red'
// }
// myvehicle(vehicleOne)
// function myvehicle(vehical) {
//   const a=vehical.type+" "+"is"+" "+vehical.model+" "+"good"+" "+vehical.year
//   console.log(a);
// }

//////new version
// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red'
// }
// myvehicle(vehicleOne)
// function myvehicle({model,brand,type,year,color}) {
//   const a=model+"is"+brand+type+year+color
//   console.log(a);
// }

/////nested destructuring
// const vehicleOne = {brand: 'Ford',model: 'Mustang', type: 'car',year: 2021, color: 'red',
// registration: {city: 'Houston',state: 'Texas',country: 'USA'}}
// myVehicle(vehicleOne)
// function myVehicle({ model, registration: { state } }) {
//   const message = 'My '+model + ' is registered in ' + state + '.';
//   console.log(message);
// }