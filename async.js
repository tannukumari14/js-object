// function k(some) {
//     console.log(some);
//   }
  
//   async function m() {return "Hello";}
  
//   m().then(
//     function(value) {k(value);},
//     function(error) {k(error);}
//   )

// async function myFunction() {
//     return "Hello";
//   }
  

//   function myFunction() {
//     return Promise.resolve("Hello");
//   }

const popj1=new Promise((resolve,reject)=>{
    setTimeout (()=>{
        let roll_no=[1,2,3,4,5]
        resolve(roll_no)
    },2000)
})

const getbiodata=(indexdata)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata)=>{
            let biodata={
                name:"tanu",
                age:18
            }
            resolve(`my roll no is ${indexdata}.my name is ${biodata.name}and i am ${biodata.age}years old.`) 
        },2000,indexdata)
    })
}
async function getdata(){
    const rollnodata=await popj1
    console.log(rollnodata);
    const biodatas=await getbiodata([1])
    console.log(biodatas);
    return biodatas
}
const getname=getdata().then((myname)=>{
    console.log(myname);
})
// console.log(getname);
getdata()