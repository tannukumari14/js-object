var list1=["one","two","three","four","five"]
var list2=[1,2,3,4,5,]
d={}
for(i in list2){
    d[list1[i]]=list2[i]
}
console.log(d)


const vehicles = ['mustang','f-150', 'expedition'];
const  vehicle1=["car", "truck", "suv"]
d={}
for(i in vehicle1){
    d[vehicles[i]]=vehicle1[i]
}
console.log(d)
