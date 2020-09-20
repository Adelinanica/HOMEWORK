var array= [2, 5, -9, -4, 6, 2,-1, 543, 181, -300];
positive = array.filter(function(a){
    return a>0;
})
sum= positive.reduce(function(a,b){
    return a+b;
})

console.log(sum);
    
 


