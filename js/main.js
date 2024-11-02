//1
// let int = prompt("Son kiriting")
// for(let a=1;a<=int;a++){
//     console.log(a);
// }
//2
// let int = prompt("Son kiriting")
// for(let a=1;a<=int;a++){
//     if(a%3==0 && a%5==0){
//         console.log(a)
//     }
//3
// }
// let int = prompt("Son kiriting")
// for(let a=int; a>=1;a--){
//     console.log(a);
// }
//4
// let a = prompt("A Son kiriting")-0
// let b = prompt("B Son kiriting")-0
// let sum = 0
// let num = 0
// for(let i=a;a<=b;a++){
//     // console.log(a);
//     sum+=a
//     num = num+1
// }
// console.log("sonlar yigindisi: "+sum+"-ga teng");
// console.log("orada :"+num+"-son bor");

//5
// let a = prompt("A sonni kiriting");
// let b = prompt("B sonni kiriting");

// for (let i = a; i <= b; i++) {
//     if (b % i === 0) {
//         console.log("b sonning boluvchilari: "+i+" -ga teng"); 
//     }
// }


//6
// let a = prompt("A Son kiriting")-0
// let b = prompt("B Son kiriting")-0

// let sum = 0;
// for (let i = a; i <= b; i++) {
//     if (b % i === 0) {
//         sum += i;
//     }
// }

// console.log(sum);




//7
// let product = 1;
// for (let i = 5; i <= 49; i += 2) {
//     product *= i;
// }

// console.log(product); 

//8
// let a = prompt("A Son kiriting")-0
// let b = prompt("B Son kiriting")-0

// let count = 0;
// while (a >= b) {
//   a -= b;
//   count++;
// }

// console.log(" a son b son - :", count,": martta sigadi")

//9
// let a = prompt("A Son kiriting")-0
// let b = prompt("B Son kiriting")-0
// while (a >= b) {
//   a -= b;
// }

// console.log("Qoldiq : "+a+"ga teng")

//10
// let sum = prompt("Narx kiriting")-0
// let n = prompt("N kiring")-0

// for(let i = 0.1; i<=n; i+=0.1){
//     console.log(Number(i.toFixed(1)) * sum)
// }

//11
// let number = prompt("2 xonali son kiriting")-0
// let tens = Math.floor(number / 10)
// let units = number % 10

// let smaller, larger

// if (tens < units) {
// smaller = tens
// larger = units
// } else {
// smaller = units
// larger = tens}


// let result;
// let current = smaller + 1

// while (current < larger) {
// result += current
// if (current < larger - 1) { 
//         result += " "
// }
// current++
// }

// console.log("Orasidagi farqi - ", result)


//12
// let a = prompt("A Son kiriting")-0
// let b = prompt("B Son kiriting")-0

// if (a > b) {
//   let tub = true;

//   for (let i = 2; i < b; i++) {
//     if (b % i === 0) {
//       tub = false;
//       break;
//     }
//   }

//   if (tub && b > 1) {
//     console.log(b + "soni tub .");
//   } else {
//     console.log(b + "soni tub emas.");
//   }
// } else {
//   console.log("Xato: a b dan katta bo'lishi kerak.");
// }
