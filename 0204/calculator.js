function add(){
    let a =20;
    let b = 10;
    let c= a+b;
    console.log(c);
    
    
}

function sub(a,b){
    
    let c= a-b;
    console.log(c);
    
}
function multiply(x=12,y=11) {
    let z=x*y;
    console.log(z);
    
    
}
function division(s=30,t=2) {
    let h=30/2;
    //console.log(h);
    
    return h;
    
}
function percentage (){
    let x=120;
    let y=30;
    let v=y%x;
    return v;
}
add()
sub(30,10)
multiply()
multiply(5,6)
multiply(3, 0)
let div =division()
console.log("answer is", div);
let c =percentage()
console.log("percentage is",c);
