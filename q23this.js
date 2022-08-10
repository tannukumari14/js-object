// a={
//     firstname:"tanu",
//     lastname:"kumari",
//     fullname:function(){
//         return this.firstname+" "+this.lastname
//     }
// }
// console.log(a.fullname())

// function foo(){
//     this.a=2
// }
// foo()
// console.log(a)

// function foo(){
//     this.a=2
// }
// const obj={
//     foo:foo
// }
// obj.foo()
// console.log(obj.a)

// a={
//     "name":"daddy",
//     "sound":"muuu",
//     fullname:function(){ 
//         return this.name+" "+this.sound
//     }
// }
// console.log(a.fullname())

// const foo=function(){
//     console.log(this.bar)
// }
// foo.call({bar:10})

// function point(x,y){
//     this.x=x
//     this.y=y
// }
// const p1=new point(1,2)
// console.log(p1.x)
// console.log(p1.y)


// "use strict"
// function sum(){
//     var add=2+9
//     console.log(add)
//     console.log(this)
// }
// sum()

// function sum(){
//     var add=2+9
//     console.log(add)
//     console.log(this)
// }
// sum()


// const a={
//     name:"tanu kumari",
//     quali:12,
//     sum:function(){
//         var add =2+2
//         console.log(add)
//         console.log(this.name)
//         console.log(this)
//     }
// }
// a.sum()

///this in method,this refers to the object
// const k = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
// fullName : function(){
//     return this.firstName + " " + this.lastName;
//   }
// }
// console.log(k.fullName())

//this alone,this refers to global object
// let x=this
// console.log(x);

//strict mode whenused alone,refers global object
// "use strict"
// let x=this
