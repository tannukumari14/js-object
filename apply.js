// array=Math.max(1,2,3)
// console.log(array);


// arrmax=Math.max.apply(9,[1,2,3,4,5])
// console.log(arrmax);

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
//   }
//   person.fullName.apply(person1);
//   console.log(person1);

const person={
  fullname:function(city,country) {
    return this.firstname+" "+this.lastname+","+city+","+country
  }
}
const person1={
  firstname:"tanu",
  lastname:"kumari"
}
person.fullname.apply(person1,["delhi","india"])
console.log(person1)
