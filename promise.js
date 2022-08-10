// var count=true
// var sham=new Promise(function (resolve,reject) {
// if (count){
//     resolve("it is good")
// }    
// else{
//     reject("it is bad")
// }
// })
// sham.then(function(value){
//     console.log(value);
// })
// .catch(function(value){
//     console.log(value);
// })


// var count=true
// var sham=new Promise(function (resolve,reject) {
// if (count){
//     setTimeout(()=>resolve("it is good"),3000)
// }    
// else{
//     reject("it is bad")
// }
// })
// sham.then(function(value){
//     console.log(value);
// })
// .catch(function(value){
//     console.log(value);
// })

///create promise
const popj1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let roll_no=[1,2,3,4,5]
        resolve(roll_no);
        // reject("rejected the promise")
    },2000)
})
const getbiodata=(indexdata)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata)=>{
            let biodata={
                name:"pinki",
                age:17
            }
            resolve(`my roll no is ${indexdata}.my name is ${biodata.name}and i am ${biodata.age}years old.`)
        },2000,indexdata)
    })
}
////recieving value
popj1.then((rollno)=>{
    console.log(rollno);
    return getbiodata(rollno[1])
    }).then((nothing)=>{
        console.log(nothing);
    }).catch((error)=>{
    console.log(error);
})

//with thn and catch we get data of a promise