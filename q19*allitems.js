a={1:23,2:34,3:45}
multiply=1
for(i in a){
    multiply*=a[i]
}

a={1:23,2:34,3:45}
num=1
for(i in a){
    num*=Number(i)
}
console.log(num*multiply)

