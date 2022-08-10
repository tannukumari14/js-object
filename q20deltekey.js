// var mydict=[{"tanu":90,"sneha":78,"jiya":87,}]
// var k=[]
// for (i of mydict){
//     for(j in i){
//         if (!k.includes(i[j])){
//             k.push(i[j])
//         }
//     }
// }
// console.log(k)

var mydict=[{"tanu":90,"sneha":78,"jiya":45}]
var k=[]
for(i in mydict){
    for(j in i){
        if(!k.includes(mydict[j])){
            k.push(mydict(i[j]))
        }
    }
}
console.log(k)