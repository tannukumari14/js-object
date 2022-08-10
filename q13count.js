// a=[]
// word="mssiiipip"
// b={}
// for(i of word){
//     if(a.includes(i)){
//         b[i]=b[i]+1
//     }
//     else{
//         a.push(i)
//         b[i]=1

//     }
// }
// console.log(b)

var dict = {'Alex': ['subj1', 'subj2', 'subj3'],'David': ['subj1', 'subj2'],"tanu":["subj1"]}
count=0
for( i in dict){
    for(a in dict[i])
    count++
}
console.log(count)