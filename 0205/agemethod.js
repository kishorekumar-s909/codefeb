function calculateage(x,y,op){
    op(x,y);

    
   
   
     
    }
//let age = calculateage()

function findage1(x,y){
    let z=y-x;
    
    
    
      if(z >= 18){
        console.log( " eligible for voting");
        
    }
    else{
        console.log(" not eligible for voting");
    }
}
calculateage(2000,2026,findage1)