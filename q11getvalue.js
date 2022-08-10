list=[{"first":"1"},{"second": "2"},{"third": "1"},{"four": "5"},{"five":"5"},{"six":"9"},{"seven":"7"}]
b=[]
for(i in list){
    for(j in i){
        if(!b.includes(i[j])){
            b.push(i[j])
        }
    }
}
console.log(b)