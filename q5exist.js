// var pro={
//     name:"mannat",
//     location:"mumbai",
//     state:"maharastra"
// }
// console.log(pro.hasOwnProperty("name"))

// dict={"name":"Raju", "marks":56}
// console.log(dict.hasOwnProperty("name"))


// var readline = require('readline-sync');
// let n =readline.question('Enter the property name:');
// let dict={"name":"Raju", "marks":56}
// for (i in dict){
// if (i==n){
//   console.log("exists");
//   break
// }else{
//   console.log("not exist");
//   break
// }
// }

// dict={"name":"tanu","age":18}
// if(dict.hasOwnProperty("name")){
//     console.log("exist")
// }else{
//     console.log("not exist")
// }

my_dict={"name":"tanu","class":12,"age":18,"food":"chicken"}
if(my_dict.hasOwnProperty("food")){
    console.log("exist")
}else{
    console.log("not exist")
}