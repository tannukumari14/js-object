// function test(arg1,arg2){
//     console.log(this.num,arg1,arg2);
// }test.call({num:110},10,20)


// const a={
//     name:"tanu kumari",
//     qualification:"programming",
//     feature:function(){
//         console.log(`very good teaching.${this.name} is
//         my fav ${this.qualification},channel.`)
//     }
// }
// // a.feature();
// const b={
//     name:"husna",a
//     qualification:"software programming ",
// }
// a.feature.call(b)


// const a={
  //////proprties
//     name:"tanu kumari",
//     qualification:"programming",
///////method
//     feature:function(good){
//         console.log(`very good teaching.${this.name} is
//         my fav ${this.qualification},channel.`)
//     }
// }
// const b={
//     name:"husna",
//     qualification:"software programming ",
// }
// a.feature.call(b)

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "John Doe":
//   person.fullName.call(person1);

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "Mary Doe"
//   person.fullName.call(person2);

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person.fullName.call(person1, "Oslo", "Norway");
  console.log(person1);