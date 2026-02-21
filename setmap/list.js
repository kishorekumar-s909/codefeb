let x =[1,2,3,1,2,5,6];
let y =[];
for (n of x){
    if(!y.includes(n)){
        y.push(n);

    }
}
console.log(y);
