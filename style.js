//Q1
let number=["1", "2", "3","4","5"]
console.log(number);
//Q2
let fruits=["apple","banana","orange"]
console.log(fruits[0], ",", fruits[2]);
//Q3
fruits.push("mango");
console.log(fruits);
//Q4
console.log( "fruits.length: ", fruits.length);
//Q5
function firstfunction() {
    console.log("Hellow World");
}
// Q6
firstfunction();
function sum() {
    let num1=Number(prompt("Enter first number for sum: "));
    let num2=Number(prompt("Enter second number for sum: "));
    let result=num1+num2;
    console.log("The sum is: ", result);
}
sum();

//Q7
function square() {
    let num=Number(prompt("Enter a number for square: "));
    return num*num;
}
console.log(square());

//Q8
function checking() {
    let num=Number(prompt("Enter a number to check if it is even or odd: "));
    if(num%2==0){
        console.log(num, "is an even number");
    }
    else{
        console.log(num, "is an odd number");
    }
}
checking();

//Q9
function largest() {
    let num1=Number(prompt("Enter first number: "));
    let num2=Number(prompt("Enter second number: "));
    if(num1>num2){
        console.log(num1, "is the largest number");
    }
    else if(num2>num1){
        console.log(num2, "is the largest number");
    }
}
largest();
//Q10
function wellcome(name) {
    console.log("Welcome", name, "!");
}
wellcome("Maniya");

//Q11
let student={
    name: "Maniya",
    age: 18,
    class: "12th",
}
console.log(student.name,  student.age,  student.class);
//Q12
let car={
    brand: "Toyota",
    model: "Corolla",
    color: "White",
}
console.log(car.brand );
//Q13
let student2={
    name: "Maniya",
    age: 20,
    class: "12th",
}
student2.age=20;
console.log(student2.name, student2.age, student2.class);
//Q14
function sumArray(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}
console.log("The sum of the array is: ",sumArray([10, 20, 30]));

//Q15
let student3 = {
  name: "Ali",
  marks: 85
};

function printStudent() {
  console.log("Name: " + student3.name);
  console.log("Marks: " + student3.marks);
}
printStudent();

