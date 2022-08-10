a=require("readline-sync")
b={}
i=0
for(i<0;i<10;i++){
    name=a.question("enter name")
    marks=a.questionInt("enter marks")
    b[name]=marks
}
console.log(b)