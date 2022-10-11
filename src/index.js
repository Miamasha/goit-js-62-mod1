console.log("Hello Masha");
console.log("eeeeeeeeeeeeeeeeeeeeeee 0");
const yearOfBirth = 2006;
console.log(yearOfBirth);

console.log("eeeeeeeeeeeeeeeeeeeeeee 2");
let age = 14;
console.log(age);
age = 15;
console.log(age);

console.log("eeeeeeeeeeeeeeeeeeeeeee 4");
const pricePerItem = 1200;
const orderedQuantity = 4;
const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice);

console.log("eeeeeeeeeeeeeeeeeeeeeee 5");
const productName = "Droid";
const pricePerIt = 3500;
const mess = `You picked ${productName}, price per item is ${pricePerIt} credits`;
console.log(mess);

console.log("eeeeeeeeeeeeeeeeeeeeeee 6");
let pricePerDroid = 800;
let orderedQuantityA = 6;
let deliveryFee = 50;
const totalPriceA = pricePerDroid * orderedQuantityA + deliveryFee;
const message = `You ordered droids worth ${totalPriceA} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message);
// console.log(
// 	"You ordered droids worth ${pricePerDroid * orderedQuantityA + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.",
// );

console.log("eeeeeeeeeeeeeeeeeeeeeee 7");
function sayHi() {
console.log("Hello, this is my first function!");
}
sayHi();


console.log("eeeeeeeeeeeeeeeeeeeeeee 8");
function add(a, b, c) {
console.log(`Addition result equals ${a + b + c}`);
}
add(1, 2, 10);
add(10, 2, 30);
add(5, 15);


console.log("eeeeeeeeeeeeeeeeeeeeeee 9");
function summarise(a, b, c) {
return a + b + c;
}
console.log(summarise(15, 2, 10));
console.log(summarise(5, 10, 15));

// --------------Is difference 9/10-----------------//

console.log("eeeeeeeeeeeeeeeeeeeeeee 10");
function makeMessage(name, price) {
const message = `You picked ${name}, price per item is ${price} credits`;
return message;
}
console.log(makeMessage("Radar", 6150));


console.log("eeeeeeeeeeeeeeeeeeeeeee 11");
function calculateTotalPrice(Quantity, itemPrice) {
const totalPrice = Quantity * itemPrice;
return totalPrice;
}
console.log(calculateTotalPrice(3, 12));
console.log(calculateTotalPrice(12, 70));


console.log("eeeeeeeeeeeeeeeeeeeeeee 11A as 9");
function calculateTotalPriceA(QuantityA, itemPriceA) {
return QuantityA * itemPriceA;
}
console.log(calculateTotalPrice(3, 12));
console.log(calculateTotalPrice(12, 70));


console.log("eeeeeeeeeeeeeeeeeeeeeee 12");
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
const message = `You ordered droids worth ${orderedQuantity *
	pricePerDroid + deliveryFee} credits. Delivery (${
		deliveryFee} credits) is included in total price.`;
return message;
}
console.log(makeOrderMessage(2, 100, 50));


console.log("eeeeeeeeeeeeeeeeeeeeeee 12A as 8");
function makeOrderMessageA(orderedQuantityA, pricePerDroidA, deliveryFeeA) {
console.log(`You ordered droids worth ${orderedQuantityA *
	pricePerDroidA + deliveryFeeA} credits. Delivery (${
		deliveryFee} credits) is included in total price.`);
}
makeOrderMessageA(2, 100, 50);


console.log("eeeeeeeeeeeeeeeeeeeeeee 13");
function isAdult(age) {
const passed = age >= 18;
return passed;
}
console.log(isAdult(20));
console.log(isAdult(7));


console.log("eeeeeeeeeeeeeeeeeeeeeee 14");
function isValidPassword(password) {
const SAVED_PASSWORD = "jqueryismyjam";
const isMatch = password === SAVED_PASSWORD;
return isMatch;
}
console.log(isValidPassword("mangodab3st"));
console.log(isValidPassword("jqueryismyjam"));


console.log("eeeeeeeeeeeeeeeeeeeeeee 15");
function checkAge(age) {
let message;
if (age >= 18) {message = "You are an adult";}
else {message = "You are a minor";}
return message;
}
console.log(checkAge(21))

console.log("eeeeeeeeeeeeeeeeeeeeeee 19");
function checkPassword(password) {
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
if (password === null) {message = 'Canceled by user!';}
else if (password === ADMIN_PASSWORD) {message = 'Welcome!';}
else {message = 'Access denied, wrong password!';}
return message;
}
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));


console.log("eeeeeeeeeeeeeeeeeeeeeee 20");
function checkStorage(ordered, available) {
let message;
if (ordered === null || ordered <= 0 || !ordered) {message = 'There are no products in the order!';}
else if (ordered <= available) {message = 'The order is accepted, our manager will contact you';}
else {message = 'Your order is too large, there are not enough items in stock!';}
return message;
}  
console.log(checkStorage(null, 40));
console.log(checkStorage(50, 100));
console.log(checkStorage(30, 10));

console.log("eeeeeeeeeeeeeeeeeeeeeee 20A");
function checkStorageA(availableA, orderedA) {
let message;
if (orderedA === 0) {message = 'There are no products in the order!';}
else if (orderedA > availableA) {message = 'Your order is too large, there are not enough items in stock!';}
else {message = 'The order is accepted, our manager will contact you'}
return message;
}
console.log(checkStorageA(100, 50));
console.log(checkStorageA(100, 130));
console.log(checkStorageA(70, 0));


console.log("eeeeeeeeeeeeeeeeeeeeeee 21");
function isNumberInRange(start, end, number) {	
const isInRange = start < number && number < end;
return isInRange;
}
console.log(isNumberInRange(1, 3, 18))


console.log("eeeeeeeeeeeeeeeeeeeeeee 22");
function checkIfCanAccessContent(subType) {
const canAccessContent = subType == "pro" || subType == "vip";

return canAccessContent;
}
console.log(checkIfCanAccessContent("pro"));
console.log(checkIfCanAccessContent("student"));


console.log("eeeeeeeeeeeeeeeeeeeeeee 23");
function isNumberNotInRange(start, end, number) {
const isInRange = number >= start && number <= end;
const isNotInRange = !isInRange;
return isNotInRange;
}
console.log(isNumberNotInRange(10, 30, 17))


console.log("eeeeeeeeeeeeeeeeeeeeeee 24");
function getDiscount(totalSpent) {
const BASE_DISCOUNT = 0;
const BRONZE_DISCOUNT = 0.02;
const SILVER_DISCOUNT = 0.05;
const GOLD_DISCOUNT = 0.1;
let discount;
if (totalSpent >= 50000) {discount = GOLD_DISCOUNT}
else if (totalSpent >= 20000 && totalSpent < 50000) {discount = SILVER_DISCOUNT}
else if (totalSpent >= 5000 && totalSpent < 20000) {discount = BRONZE_DISCOUNT}
else {discount = BASE_DISCOUNT}
return discount;
}
console.log(getDiscount(46900))
console.log(getDiscount(8250))
console.log(getDiscount(50000))
console.log(getDiscount(1300))


console.log("eeeeeeeeeeeeeeeeeeeeeee 25");
function checkStorageB(availableB, orderedB) {
let message;
message = orderedB > availableB ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
return message;
}
console.log(checkStorageB(200, 150))
console.log(checkStorageB(100, 130))



console.log("eeeeeeeeeeeeeeeeeeeeeee 26");
function checkPasswordA(password) {
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
return message;
}
console.log(checkPasswordA("angul4r1sl1f3"))


console.log("eeeeeeeeeeeeeeeeeeeeeee 27");
function getSubscriptionPrice(type) {
let price;
		
switch (type) {
case "starter": 
	price = 0;
	break;	  
case 'professional' :
	price = 20;
	break;	  
case 'organization':
	price = 50;
	break;}	  
return price;}
console.log(getSubscriptionPrice('professional'))


console.log("eeeeeeeeeeeeeeeeeeeeeee 28");
function checkPasswordB(passwordb) {
const ADMIN_PASSWORDB = "jqueryismyjam";
let messageb;	
switch (passwordb) {
	case ADMIN_PASSWORDB:
	messageb = "Welcome!";
	break;

	case null:
	messageb = "Canceled by user!";
	break;		

	default:
	messageb = "Access denied, wrong password!";
	}
return messageb;
}
console.log(checkPasswordB("mangohackzor"))
console.log(checkPasswordB("jqueryismyjam"))
console.log(checkPasswordB(null))
console.log(checkPasswordB("polyhax"))

console.log("eeeeeeeeeeeeeeeeeeeeeee 30");
function getNameLength(name) {
const message = `Name ${name} is ${name.length} characters long`; 
return message;
}
console.log(getNameLength("Poly"))


console.log("eeeeeeeeeeeeeeeeeeeeeee 31");
const courseTopic = "JavaScript essentials";

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

console.log(courseTopic.length)
console.log(courseTopic[0])
console.log(courseTopic[courseTopic.length - 1])


console.log("eeeeeeeeeeeeeeeeeeeeeee 32");
function getSubstring(string, length) {
const substring = string.slice(0, length);
return substring
}
console.log(getSubstring("Hello world", 3))
console.log(getSubstring("Hello world", 0))
console.log(getSubstring("Hello world", 5))


console.log("eeeeeeeeeeeeeeeeeeeeeee 32A");
const productNameB = "Repair droid";
console.log(productNameB.slice(0, 4)); // "Repa"
console.log(productNameB.slice(3, 9)); // "air dr"


console.log("eeeeeeeeeeeeeeeeeeeeeee 33*");
function formatMessage(message, maxLength) {
let result;

if (maxLength >= message.length){
result = message}
else {
result = `${message.slice(0, maxLength)}...`
}
return result;
}
console.log(formatMessage("Curabitur ligula sapien", 16))
console.log(formatMessage("Curabitur ligula sapien", 23))


console.log("eeeeeeeeeeeeeeeeeeeeeee 36*");
//must return "true" if 'spam' or 'sale' are present.
function checkForSpam(message) {
let result;
const normalisedMessage = message.toLowerCase()
result = normalisedMessage.includes('sale') || normalisedMessage.includes('spam')
return result;
}
console.log(checkForSpam('Amazing SalE, only tonight!'))
console.log(checkForSpam("Hello world"))
console.log(checkForSpam('Trust me, this is not a spam message'))


console.log("eeeeeeeeeeeeeeeeeeeeeee Lesson 2, Example 1");
let counter = 0;
while (counter < 6) {
console.log("counter: ", counter);
counter += 1;
}
let counterA = 0;
while (counterA <= 15) {
console.log("counterA: ", counterA);
counterA += 5;
}

console.log("eeeeeeeeeeeeeeeeeeeeeee Example 2");
let password = "";
// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);
console.log("Ввели пароль: ", password);

console.log("eeeeeeeeeeeeeeeeeeeeeee Example 3");
for (let i = 0; i <= 20; i += 5) {
console.log(i);
}

console.log("eeeeeeeeeeeeeeeeeeeeeee Example 4");
const target = 3;
let sum = 0;
for (let i = 0; i <= target; i += 1) {
sum += i;
}
console.log(sum);
console.log("eeeeeeeeeeeeeeeeeeeeeee Example 4a");
let sumA = 0;
let iA = 0;
const targetA = 3;
while (iA <= targetA) {
// sumA = sumA + iA;
sumA += iA;
iA += 1;
console.log(sumA);
}


console.log("eeeeeeeeeeeeeeeeeeeeeee Example 5");
const max = 4;
for (let i = 0; i < max; i += 1) {
console.log(`${max} % ${i} = `, max % i);
}

console.log("eeeeeeeeeeeeeeeeeeeeeee Example 6");
for (let i = 0; i <= 5; i += 1) {
console.log(i);  
if (i === 3) {
console.log("Нашли число 3, прерываем выполнение цикла");
break;}
}  
console.log("Лог после цикла");


console.log("eeeeeeeeeeeeeeeeeeeeeee Example 6");
const number = 10;
for (let i = 0; i < number; i += 1) {
if (i % 2 === 0) {continue;}
console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
}


console.log("eeeeeeeeeeeeeeeeeeeeeee 9/32*");
function getExtremeElements(array) {
const firstIndex = array[0];
const lastIndex = array[array.length - 1]
return array = [firstIndex, lastIndex]
}  
console.log(getExtremeElements([1, 2, 3, 4, 5]))
console.log(getExtremeElements(["Earth", "Mars", "Venus"]))
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]))


console.log("eeeeeeeeeeeeeeeeeeeeeee 11/32*");
function calculateEngravingPrice(message, pricePerWord) {
let price;
let massive;
let wordsQuantity;
massive = message.split(" ");
wordsQuantity = massive.length;
price = wordsQuantity * pricePerWord;
return price;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));


console.log("eeeeeeeeeeeeeeeeeeeeeee 12/32*");
function makeStringFromArray(array, delimiter) {
let string;
string = array.join(delimiter)
return string;
}
console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "))
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"))


console.log("eeeeeeeeeeeeeeeeeeeeeee 13/32*");
function slugify(title) {
let massive;
let preSlug;
let slug;
massive = title.split(" ");
preSlug = massive.join("-");
slug = preSlug.toLowerCase();
return slug;
}
console.log(slugify("English for developer"))


console.log("eeeeeeeeeeeeeeeeeeeeeee 14/32*");
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(fruits.length - 3, fruits.length);

console.log(firstTwoEls)
console.log(nonExtremeEls)
console.log(lastThreeEls)


console.log("eeeeeeeeeeeeeeeeeeeeeee 16/32");
function makeArray(firstArray, secondArray, maxLength) {
const newPreArray = firstArray.concat(secondArray);
const newArray = newPreArray.slice(0, maxLength);
return newArray;
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 5))
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0))



console.log("eeeeeeeeeeeeeeeeeeeeeee 20/32");
function calculateTotalPriceB(order) {
let total = 0;
for (let i = 0; i <= order.length; i += 1) {
	total += order[i];
	return total;
}
}
console.log(calculateTotalPriceB([21, 85, 37, 4]))


console.log("eeeeeeeeeeeeeeeeeeeeeee 21*/32");
function findLongestWord(string) {
let words = string.split(' ');
let longestword = words[0];
for (let i = 1; i < words.length; i+=1) {
	if(words[i].length > longestword.length){
		longestword = words[i];
	}
	}
return longestword;
}
console.log(findLongestWord("Google do a roll"))
console.log(findLongestWord("А баба галамага"))


console.log("eeeeeeeeeeeeeeeeeeeeeee 22/32");
function createArrayOfNumbers(min, max) {
const numbers = [];
let nextNumber;
for (let i=min-1; i<max; i+=1) {
	nextNumber = i + 1;
	numbers.push(nextNumber);
}
return numbers;
}
console.log(createArrayOfNumbers(1, 3))
console.log(createArrayOfNumbers(11, 17))


console.log("eeeeeeeeeeeeeeeeeeeeeee 23*/32");
function filterArray(numbers, value) {
let newNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {
if (numbers[i] > value) {      
newNumbers.push(numbers[i])}
}  return newNumbers;
}   console.log(filterArray([1, 2, 3, 4, 5], 3))
// 7 строк


// function filterArray(numbers, value) {
// let newNumbers = [];  
// for (let i = 0; i < numbers.length; i += 1) {
// 	let digit = numbers[i];
// 	if (digit > value) {      
// 	newNumbers.push(digit) 	}
// 	}  return newNumbers;
// }  console.log(filterArray([1, 2, 3, 4, 5], 3))
// 8 строк


// function filterArray(numbers, value) {
// let newNumbers = [];  
// let digit;
// for (let i = 0; i < numbers.length; i += 1) {
// 	digit = numbers[i];
// 	if (digit > value) {      
// 	newNumbers.push(digit) 	}
// 	}  return newNumbers;
// }  console.log(filterArray([1, 2, 3, 4, 5], 3))
// 9 строк



console.log("eeeeeeeeeeeeeeeeeeeeeee 25/32");
function getCommonElements(array1, array2) {
let commonElements = [];
for (let i = 0; i < array1.length; i += 1) {
	if (array1.includes(array1[i]) && array2.includes(array1[i])) 
	{commonElements.push(array1[i])}
}
// for (let k = 0; k < array1.length; k += 1) {
//   if (array2.includes(array2[k]) && array1.includes(array2[k])) 
//   {commonElements.push(array2[k])} }  
return commonElements;
}  console.log(getCommonElements([1, 2, 3], [2, 4]))


console.log("eeeeeeeeeeeeeeeeeeeeeee 25/32  as  23/32");
const string = "JS";
for (const character of string) {
console.log(character);
}

function filterArrayA(numbers, value) {
const filteredNumbers = [];
for ( const number of numbers) {   
	if (number > value) {filteredNumbers.push(number);}
}	return filteredNumbers; }
console.log(filterArray([1, 2, 3, 4, 5], 3))

console.log("eeeeeeeeeeeeeeeeeeeeeee 29/32");
const maxA = 4;
for (let i = 0; i < maxA; i += 1) {
console.log(`${maxA} % ${i} = `, maxA % i);
}

function getEvenNumbers(start, end) {
let evenNumbers = [];
for (let i = start; i >= start && i <= end; i +=1 ){
if (i % 2 === 0) {
	evenNumbers.push(i)
}  
}  
return evenNumbers;
}
console.log(getEvenNumbers(4, 8))


console.log("eeeeeeeeeeeeeeeeeeeeeee 30/32");
const start = 11;
const end = 27;
for (let i = start; i < end; i += 1) {
if (i % 5 === 0) {
console.log(i)
break; } }



console.log("eeeeeeeeeeeeeeeeeeeeeee 31/32");
function findNumber(start, end, divisor) {
for (let i = start; i < end; i += 1) {
if (i % divisor === 0) {
	return i;  }}}
console.log(findNumber(11, 27, 5))
// Return может использоваться только в функции



console.log("eeeeeeeeeeeeeeeeeeeeeee 4/41");
const apartment = {
imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city center",
rating: 4,
price: 2153,
tags: ["premium", "promoted", "top"],
owner: {
	name: "Henry",
	phone: "982-126-1588",
	email: "henry.carter@aptmail.com",
},
};
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];

console.log(ownerName)
console.log(ownerPhone)
console.log(ownerEmail)
console.log(numberOfTags)
console.log(firstTag)
console.log(lastTag)