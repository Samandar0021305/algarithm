// 10-masala
// function oddishOrEvenish(number){
//     let res = number.toString().split("");
//       let summa = 0 
//       for(let item of res){
//         summa +=item;
//       }
    
//       if(summa %2 ==0){
//         console.log("Oddish");
//       }else if(summa %2 ==1){
//         console.log("Evish");
//       }
//     }
    
//     let number = 50;
//     oddishOrEvenish(number)


// 11-masala

function numInStr(arry = []){
    let newArry = []
 arry.filter((element)=>{
   element.split("").filter((index) =>{
    if(index / 1 == index){
      newArry.push(element)
    }
   });
 })
 return newArry     
}

let arry = ["la","a","2b","b","9e"]
console.log(numInStr(arry));