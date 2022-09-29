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
console.log(summarise(10, 20, 30));
console.log(summarise(5, 10, 15));

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

console.log("eeeeeeeeeeeeeeeeeeeeeee 12");
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
	const message = `You ordered droids worth ${
		orderedQuantity * pricePerDroid + deliveryFee
	} credits. Delivery (${deliveryFee} credits) is included in total price.`;
	return message;
}
console.log(makeOrderMessage(2, 100, 50));

console.log("eeeeeeeeeeeeeeeeeeeeeee 13");
function isAdult(age) {
	const passed = age >= 18;
	return passed;
}
console.log(isAdult(20));
console.log(isAdult(7));

console.log("eeeeeeeeeeeeeeeeeeeeeee 14");
