//limit amount of characters that can be entered in to the display
//shrink size of numbers after 6, 7, and 8 characters
//commas after every 3rd number before a decimal point
//decimal
//clear the display after pressing a number after the operator button has been selected
//highlight selected operator button
//operations follow the order of operations
//clear vs ac button

function isEqualToZero(value){
	if(value === 0){
		return true;
	}
	return false;
}

function includesDecimal(value){
	if(value.includes(".") === 0){
		return true;
	}
	return false;
}

//DISPLAY

var calcDisplay = document.getElementById('display-bottom');
function getCalcDisplay() {
	return calcDisplay;
}



//BUTTONS

	//Number Buttons
let zeroButton = document.getElementById('zero');
let oneButton = document.getElementById('one');
let twoButton = document.getElementById('two');
let threeButton = document.getElementById('three');
let fourButton = document.getElementById('four');
let fiveButton = document.getElementById('five');
let sixButton = document.getElementById('six');
let sevenButton = document.getElementById('seven');
let eightButton = document.getElementById('eight');
let nineButton = document.getElementById('nine');
let decimalButton = document.getElementById('period');


zeroButton.addEventListener('click', function(){
	let value = zeroButton.innerHTML;
	//value = 0
	
	if (getCalcDisplay().innerHTML == "0"){
		getCalcDisplay().innerHTML = value;
	}else {
		getCalcDisplay().innerHTML += value;
	}
	
	});


oneButton.addEventListener('click', function(){
	let value = oneButton.innerHTML;
	//value = 1
	
	if (getCalcDisplay().innerHTML == "0"){
		getCalcDisplay().innerHTML = value;
	}else {
		getCalcDisplay().innerHTML += value;
	}
	
	});


twoButton.addEventListener('click', function(){
	let value = twoButton.innerHTML;
	//value = 2
	
	if (getCalcDisplay().innerHTML == "0"){
		getCalcDisplay().innerHTML = value;
	}else {
		getCalcDisplay().innerHTML += value;
	}
	
	});


threeButton.addEventListener('click', function(){
	let value = threeButton.innerHTML;
	//value = 3
	
	if (getCalcDisplay().innerHTML == "0"){
		getCalcDisplay().innerHTML = value;
	}else {
		getCalcDisplay().innerHTML += value;
	}
	
	});


fourButton.addEventListener('click', function(){
	let value = fourButton.innerHTML;
	//value = 4
	
	if (getCalcDisplay().innerHTML == "0"){
		getCalcDisplay().innerHTML = value;
	}else {
		getCalcDisplay().innerHTML += value;
	}
	
	});


fiveButton.addEventListener('click', function(){
	let value = fiveButton.innerHTML;
	//value = 5
	
	if (getCalcDisplay().innerHTML == "0"){
		getCalcDisplay().innerHTML = value;
	}else {
		getCalcDisplay().innerHTML += value;
	}
	
	});


sixButton.addEventListener('click', function(){
	let value = sixButton.innerHTML;
	//value = 6
	
	if (getCalcDisplay().innerHTML == "0"){
		getCalcDisplay().innerHTML = value;
	}else {
		getCalcDisplay().innerHTML += value;
	}
	
	});


sevenButton.addEventListener('click', function(){
	let value = sevenButton.innerHTML;
	//value = 7
	
	if (getCalcDisplay().innerHTML == "0"){
		getCalcDisplay().innerHTML = value;
	}else {
		getCalcDisplay().innerHTML += value;
	}
	});



eightButton.addEventListener('click', function(){
	let value = eightButton.innerHTML;
	//value = 8
	
	if (getCalcDisplay().innerHTML == "0"){
		getCalcDisplay().innerHTML = value;
	}else {
		getCalcDisplay().innerHTML += value;
	}
	});


nineButton.addEventListener('click', function(){
	let value = nineButton.innerHTML;
	//value = 9
	
	if (getCalcDisplay().innerHTML == "0"){
		getCalcDisplay().innerHTML = value;
	}else {
		getCalcDisplay().innerHTML += value;
	}
	});


decimalButton.addEventListener('click', function(){
	let value = decimalButton.innerHTML;
	//value = "."
	if (!getCalcDisplay().innerHTML.includes(".")){
		getCalcDisplay().innerHTML += value;
	}
	



	// var myDisplayValue = getCalcDisplay().innerHTML;
	// // console.log(myDisplayValue);
	// if (!myDisplayValue.includes(value)){

	// 	if(myDisplayValue == 0){
	// 		getCalcDisplay().innerHTML += value;
	// 	}else{
	// 		getCalcDisplay().innerHTML += value;
	// 	}

	// }

	});

	
	//Function Buttons
let clearButton = document.getElementById('ac');
let oppositeButton = document.getElementById('plusminus');
let percentButton = document.getElementById('percent');

clearButton.addEventListener('click', function(){
	getCalcDisplay().innerHTML = 0;	
});
oppositeButton.addEventListener('click', function(){});
percentButton.addEventListener('click', function(){});
	
	
	
	//Operator Buttons
let divideButton = document.getElementById('divide');
let multiplyButton = document.getElementById('multiply');
let subtractButton = document.getElementById('minus');
let addButton = document.getElementById('plus');
let equalButton = document.getElementById('equal');

divideButton.addEventListener('click', function(){});
multiplyButton.addEventListener('click', function(){});
subtractButton.addEventListener('click', function(){});
addButton.addEventListener('click', function(){});
equalButton.addEventListener('click', function(){});