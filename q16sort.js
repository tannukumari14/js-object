// Original_dictionary = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0}
// let sortable = [];
// for (var i in Original_dictionary) {
//     sortable.push([i, Original_dictionary[i]]);
// }
// sortable.sort(function(a, b) {
//     return b[1] - a[1];
// });
// console.log(sortable)

// Original_dictionary = {1: 2, 3: 4, 4: 3, 2: 1, 0: 0}
// let sortable = [];
// for (var i in Original_dictionary) {
//     sortable.push([i, Original_dictionary[i]]);
// }

// sortable.sort(function(a, b) {
//     return a[1] - b[1];
// });
// console.log(sortable)
 
a={"marks1":9,"marks2":67,"marks3":56}
let sortable=[]
for(i in a){
    sortable.push([i,a[i]])
}
// console.log(sortable/.sort())
sortable.sort(function(a,b){
    return a[1]>b[1]
})
console.log(sortable) 