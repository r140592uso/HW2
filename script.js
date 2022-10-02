// 1.შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს: 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function sumpositive(...numbers) {
  let numbersum = 0;
  for (let item of numbers) {
    if (item > 0) {
      // ვერ მივხვდი if (item > 0) რატოა სწროი?? მეგონა რომ if (itam[] > 0) -ს უნდა ემუშავა, მაგრამ არ იმუშავა და ასე მუშაობს კოდი ამიტომ დავტოვე :-????
      numbersum += item;
    }
  }
  console.log(numbersum);
}
sumpositive(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
§
// 2.ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: 10, 50, 6, 7, 8, 11, 6, 3, 9

function sum(...numbers1) {
  let numbersum1 = 0;
  for (let item1 of numbers1) {
    numbersum1 += item1;
  }
  console.log(numbersum1);
}
sum(10, 50, 6, 7, 8, 11, 6, 3, 9);

// 3.ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true
}

function username(user){
  if(user.isloggedin){
    return user.firstname + " " + user.lastname;
  }
  else{
    return false;
  }
}
let result = username(user);
console.log(result); 

// 4.შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function max(number) {
  let maxvalue = 0;
  for (let i of number) {
    if (i > maxvalue) {
      maxvalue = i;
    }
  }
  return maxvalue;
}

console.log(max([1, 2, 4, 10, 34, 5, 7, 87]));
// 5. მოცემულია მასივი let array = [1,2,4,10,34,5,7,87] გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე;

let array = [1,2,4,10,34,5,7,87];
for(let item of array)
if (item > 0 & item < 10) {
  console.log(item);  
}