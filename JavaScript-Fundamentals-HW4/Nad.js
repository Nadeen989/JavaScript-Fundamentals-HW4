// Q-1

let length = 50;
let width = 50;

console.log("The area of the rectangle is: " + length * width );

//Q-2

let celsius = 37;
console.log(celsius+" °C is "+ celsius * 1.8 + 32 +" °F");
let fahrenheit  = celsius * 1.8 + 32;
console.log(fahrenheit+"°F is "+ celsius +"°C ");

//Q-3

let Numbers = [23,54,32,87,47]
let sum=0
for (let index = 0; index < Numbers.length; index++){
    sum+=Numbers[index]
}
console.log(sum)

//Q4

let arr=[16,4,2,0,19,6]
max = arr[0]
for(let index=0;index<arr.length;index++){
    if (max<arr[index]){
        max=arr[index]
    }
}
console.log(max)


//Q-5

let arry = [1,2,3,4,5,6,7,8,9,10]
for (let index=arry.length-1;index>=0;index--){
    console.log(arry[index])
}


//Q-6

let n = 8
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += " "
  }

  for (let k = 0; k < i; k++) {
    string += "*"
  }
  string += "\n"
}
console.log(string)

