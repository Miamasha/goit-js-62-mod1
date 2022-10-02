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


console.log("eeeeeeeeeeeeeeeeeeeeeee 33");
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


console.log("eeeeeeeeeeeeeeeeeeeeeee 36");
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



let counter = 0;
while (counter < 10) {
console.log("counter: ", counter);
counter += 1;
}
let counterA = 0;
while (counterA <= 20) {
console.log("counterA: ", counterA);
counterA += 5;
}


let password = "";
// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);
console.log("Ввели пароль: ", password);


for (let i = 0; i <= 20; i += 5) {
console.log(i);
}


const target = 3;
let sum = 0;
for (let i = 0; i <= target; i += 1) {
sum += i;
}
console.log(sum);

let sumA = 0;
let iA = 0;
const targetA = 3;
while (iA <= targetA) {
sumA = sumA + iA;
iA += 1;
console.log(sumA);
}

const max = 10;
for (let i = 0; i < max; i += 1) {
console.log(`${max} % ${i} = `, max % i);
}


for (let i = 0; i <= 5; i += 1) {
console.log(i);  
if (i === 3) {
	console.log("Нашли число 3, прерываем выполнение цикла");
	break;}
}  
console.log("Лог после цикла");



const number = 10;
for (let i = 0; i < number; i += 1) {
if (i % 2 === 0) {continue;}
console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
}