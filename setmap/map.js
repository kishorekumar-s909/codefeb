let names = "malayalam"
let countLetter = new Map();
for(let n of names){
    if(countLetter.has(n)){
        countLetter.set(n,countLetter.get(n)+1)
    }else{
        countLetter.set(n,1)
    }
}
console.log(countLetter);
