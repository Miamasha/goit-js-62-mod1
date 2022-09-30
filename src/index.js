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