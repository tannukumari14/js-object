//value sum
// my_dict = {'data1':100,'data2': -54,'data3': 247}
// sum=0
// for(i in my_dict){
//     sum+=my_dict[i]
// }
// console.log(sum)

// key sum
// a={1:56,2:90,3:89}
// sum=0
// for (i in a){
//     sum+=Number(i)
// }
// console.log(sum);

// //key value sum
a={1:23,2:34,3:45}
sum=0
for(i in a){
    sum+=a[i]
}
a={1:23,2:34,3:45}
num=0
for(i in a){
    num+=Number(i)
}
console.log(num+sum)