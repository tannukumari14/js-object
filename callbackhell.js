const getroolno=()=>{
    setTimeout(()=>{
        console.log("api geeting rool no");
        let roll_no=[1,2,3,4,5]
        console.log(roll_no);
        setTimeout((rollno)=>{
            const biodata={
                name:"tanu",
                age:18
            }
            console.log(`my roll no is ${rollno}.my name is${biodata.name} and i am ${biodata.age}years old`);
        setTimeout(()=>{
            biodata.gender="female"
            console.log(`my roll no is ${rollno}.my name is${biodata.name} and i am ${biodata.age}years old.i am a ${biodata.gender}`);
        },2000,biodata.name)
        },1000,roll_no[1])
    },2000)
}
getroolno()