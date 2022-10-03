// 10-masala
function oddishOrEvenish(number){
    let res = number.toString().split("");
      let summa = 0 
      for(let item of res){
        summa +=item;
      }
    
      if(summa %2 ==0){
        console.log("Oddish");
      }else if(summa %2 ==1){
        console.log("Evish");
      }
    }
    
    let number = 50;
    oddishOrEvenish(number)