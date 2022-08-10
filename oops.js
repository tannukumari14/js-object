// function students() {   
// }

///instead of function we use class
////this is the syntax of class
//student is a class
class students{
    constructor(name,age,cls){
        //construtor iss liye use kiya hai kuyki hume uski propertie par herit katna pata hai
        this.myname=name
        this.myage=age
        this.mycls=cls
    }
    //properties
    //it is instance method
    biodata(){
        console.log(`hi i am ${this.myname}. 
        i am ${this.myage}. my cls is ${this.mycls}`);
}}
class gameplayer extends students{
    //for creating propertie we use construtor
    constructor(name,age,cls,game){
        super(name,age,cls)
        this.myname=name
        this.myage=age
        this.mycls=cls
        this.mygame=game
    }
    biodata(){
    console.log(`hi i am ${this.myname}. 
    i am ${this.myage}. my cls is ${this.mycls}.i like to ${this.mygame}`);
    
}}

//// create object
//objects
let obj1=new gameplayer("anu",18,"engineering","tennis")
// let obj2=new students("unat",18,"grafice")
// console.log(obj1)
obj1.biodata()
