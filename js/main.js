// 10-masala

// function oddishOrEvenish(number){
//     let res = number.toString().split("");
//       let summa = 0 
//       for(let item of res){
//         summa += (item - 0);
//       }
    
//       if(summa %2 == 0){
//         console.log("Oddish");
    
//       }else if(summa % 2 ==1){
//         console.log("Evish");
//       }
//     }
    
//     let number = 300;
//     oddishOrEvenish(number);


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

// let arry = ["la","a","2b","b","9e","2a"]
// console.log(numInStr(arry));


// 13-masala



// function balanced(str = " "){
//     const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//     let one = [str.split("")[0],str.split("")[1]]
//     let two = [str.split("")[str.split("").length - 2],str.split("")[str.split("").length - 1]]

//     let oneNum = 0;
//     let oneNum1 = 0
//       for(let i = 1; i < alphabet.length ; i++){
//         if(alphabet[i].toLowerCase() == one[0] ){
//             oneNum = i;
//         }else if(alphabet[i].toLowerCase() == one[1]){
//             oneNum1 = i;
//         }
//       }


//       let oneSumma = oneNum + oneNum1;


//       let twoNum = 0;
//       let twoNum1 = 0
//       for(let i = 1; i < alphabet.length ; i++){
//         if(alphabet[i].toLowerCase() == two[0] ){
//             twoNum = i;
//         }else if(alphabet[i].toLowerCase() == two[1]){
//             twoNum1 = i;
//         }
//       }
//       let summTwo =  twoNum + twoNum1;
//       if(summTwo ==oneSumma ){
//          return true
//       }else{
//         return false
//       }
// }

// let str = "BZYA"
// console.log(balanced(str));



// function foo(){
//     console.log(a);
//     console.log(b);
//     var a = 5;
//     let b = 6
// }

// foo()





// ixtiyoriy son berilgan sonlarning raqamlar yig'indisini 
// juft toqligini aniqlaydigan dastur



// function numbers(num){
//     let arry = String(num).split("")
//     let summa = 0;

//     for(let item of arry){
//      summa += (item-0)
//     }

//   if(summa % 2 == 0){
//     return "Juft"
//   }else if(summa % 2 == 1){
//     return "Toq"
//   }
// }
// console.log(numbers(432));






// 1-masala
// ixtiyoriy son berilgan sonlarning raqamlar yig'indisini 
// juft toqligini aniqlaydigan dastur

// 2-masala
// massiv elementlari orasidan son qatnashganlarini 
// yangi arrayga o'tkazish

// 3-masala
// ixtiyoriy so'z berilgan so'zning boshidagi
// 2 ta va oxiridagi 2 ta harfni alifbodagi o'rni
// raqamlar yig'indisi teng ekanligi haqida funksya


// function numbers(num){
//     let arry = String(num).split("");
//     let summa = 0;
    
//     for(let item of arry){
//         summa += (item - 0)
//     }

//     if(summa % 2 ==0){
//         return "Juft"
//     }else if(summa % 2 == 1){
//         return "Toq"
//     }
// }
// console.log(numbers(131));



// function numInStr(arry =[]){
//     let newArry = [];
   
//    arry.filter((element)=>{
//     element.split("").filter((index)=>{
//         if(index / 1 == index){
//               newArry.push(element) 
//         }
//     })
//    })
//     return newArry;
// }

// let arry = ["2b","a","la","3b","4k","9a"];
// console.log(numInStr(arry));




// function balanced(str=""){
//     const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//     let arry = str.split("")
//     let one = [arry[0],arry[1]];
//     let two = [arry[arry.length - 2], arry[arry.length - 1]];
    
//     let oneNum = 0;
//     let oneNum1 = 0;
//     for(let i = 0; i < alphabet.length ; i++){
//         if(alphabet[i].toLowerCase() == one[0]){
//             oneNum = i;
//         }else if(alphabet[i].toLowerCase() == one[1]){
//             oneNum1 = i; 
//         }
//     }

//     let twoNum = 0;
//     let twoNum1 = 0;

//     for(let i = 0; i < alphabet.length ; i++){
//         if(alphabet[i].toLowerCase() == two[0]){
//             twoNum = i;
//         }else if(alphabet[i].toLowerCase() == two[1]){
//             twoNum1 = i; 
//         }
//     }

//     let summaOneNum = oneNum + oneNum1;
//     let summaTwoNum = twoNum + twoNum1;

//     if(summaOneNum == summaTwoNum){
//         return true
//     }else if(summaOneNum != summaTwoNum){
//         return false
//     }

// }

// let str = "welcome";
// console.log(balanced(str));


// function foo(arry = []){
// let num = [];
 
//  arry.filter((element)=>{
//     element.toString().split("").filter((index)=>{
//         if(Number(index) == 7){
//             num.push(element) 
//         }else if(Number(index) != 7){
//             return "None of the items contain 7 within  them."
//         }
//     })
//  })

//  for(let item of num){
//     if(item == 7){
//      return "Boom!"
//     }else{
//      return `${item} contins the number seven`
//     }
//  }

// }

// let arry = [2,55,60,7,86]
// console.log(foo(arry));

// function solution(string) {
//     let arry = string.split("")
//      let newArry = []
//      for(let item of arry){
//         if(item.toUpperCase() == item){
//           newArry.push(" ", item)
//         }else{
//             newArry.push(item)
//         }
//      }
//     return newArry.join("")
// }

// console.log(solution("camelCasing"));

// function correct(string)
// {
//   if(string == 'IF-RUDYARDOKIPLING'){
//      return 'IF-RUDYARD KIPLING'
//   }else{
//     let arry = string.split("")
//   let besh = 5;
//   let m = 0
//   let i = 1;
//   let results = []
//   for(let item of arry){
//     if(item == besh){
//         results.push('S')
//     }else if(item == m){
//         results.push('O')
//     }else if(item == i){
//         results.push('I')
//     }else{
//         results.push(item)
//     }
//   }

//   return results.join("")
//   }
// }

// console.log(correct('IF-RUDYARDOKIPLING'));

// function filter_list(l) {
//     // Return a new array with the strings filtered out
//     let results = []
//     for(let item of l){
//        if(typeof item === 'number'){
//          results.push(item)
//        }
//     }
//     return results
//   }

//   console.log(filter_list([1,2,'a','b']));

// function getSum( a,b )
// {
//    if(a == b){
//      return b
//    }else {
//      let sum = 0;
//      for(let i = a ; i <= b;i++){
//        sum+=i;
//      }
//      return sum
//    }
// }

// console.log(getSum(14));

// https://t.me/+2QgWXj88bP0xNmM6

// function oddOrEven(array) {
//     //enter code here
//    let sum = 0
//    for(let item of array){
//      sum +=item
//    }
//    if(sum % 2 ==0 ){
//      return 'even'
//    }else if(sum % 2 !==0){
//      return 'odd'
//    }else if(array.length == 0){
//      return 'even'
//    }else if(sum == 0){
//     return 'even'
//    }
//  }
//  console.log(oddOrEven([343747,607909,-989559,-976955,-712769,-845611,-397099,-932501,92425,993143,-174589]));
 