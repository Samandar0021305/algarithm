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

// function numInStr(arry = []){
//     let newArry = []
//  arry.filter((element)=>{
//    element.split("").filter((index) =>{
//     if(index / 1 == index){
//       newArry.push(element)
//     }
//    });
//  })
//  return newArry     
// }

// let arry = ["la","a","2b","b","9e"]
// console.log(numInStr(arry));


// 13-masala



function balanced(str = " "){
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let one = [str.split("")[0],str.split("")[1]]
    let two = [str.split("")[str.split("").length - 2],str.split("")[str.split("").length - 1]]
   
    let oneNum = 0;
    let oneNum1 = 0
      for(let i = 1; i < alphabet.length ; i++){
        if(alphabet[i].toLowerCase() == one[0] ){
            oneNum = i;
        }else if(alphabet[i].toLowerCase() == one[1]){
            oneNum1 = i;
        }
      }


      let oneSumma = oneNum + oneNum1;


      let twoNum = 0;
      let twoNum1 = 0
      for(let i = 1; i < alphabet.length ; i++){
        if(alphabet[i].toLowerCase() == two[0] ){
            twoNum = i;
        }else if(alphabet[i].toLowerCase() == two[1]){
            twoNum1 = i;
        }
      }
     

      let summTwo =  twoNum + twoNum1;

      if(summTwo ==oneSumma ){
         return true
      }else{
        return false
      }

    

}

let str = "zips"
console.log(balanced(str));

