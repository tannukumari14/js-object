// var pro={
//     name:"mannat",
//     location:"mumbai",
//     state:"maharastra"
// }
// delete pro.state
// console.log(pro)

const { doesNotReject } = require("assert")

// var myDict= {1: 'NAVGURUKUL',2: 'IN',3:{  'A' : 'WELCOME','B' : 'To','C' : 'DHARAMSALA'}}
// for(i in myDict){
//     if(typeof(myDict[i])=="object"){
//         delete myDict[i]["A"]
//     }
// }
// console.log(myDict)

a=["tanu","unat"]
b=["janvi","kashish"]
c={}
for (i in b){
    c[a[i]]=b[i]
}
console.log(c)