

const fortunes = ['Fortune: You will get a job interview in 2 months, but you will ultimately not be choosen for that job', 'Fortune: Orangutans will go extinct in the wild', 'Fortune: We will do warming scenario RCP4.5', 'Fortune: You will be vegan by 2035 and you will look back on the jokes you made at the expense of your vegan friend, Sarsar, with regret', 'Fortune: The next time you play Ultimate Chicken Horse, Ian will win every single time', 'Fortune: You will see your least favorite professor in HEB and make eye contact while buying Dr. Pepper', 'Fortune: The next time that you drink rum you will vomit', 'Fortune: You\'re student loan debt will be forgiven, but you will still feel poor.'];



function buttonNw(buttonOne) {
	buttonOne.style="background-color:white; position:absolute; TOP:200px; LEFT:570px"
	var colorButtons = document.querySelectorAll(".colors")
	for (var i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display="none"
	}
	var numberButtons = document.querySelectorAll(".numbersOdd")
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].style.display="block"
	}
	var closed = document.querySelector("#first")
	closed.style.display="none"
	var oddPicture = document.querySelector("#third")
	oddPicture.style.display="block"
}

function buttonNe(buttonTwo) {
	buttonTwo.style="background-color:white; position:absolute; TOP:200px; LEFT:690px"
	var colorButtons = document.querySelectorAll(".colors")
	for (var i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display="none"
	}
	var numberButtons = document.querySelectorAll(".numbersEven")
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].style.display="block"
	}
	var closed = document.querySelector("#first")
	closed.style.display="none"
	var oddPicture = document.querySelector("#second")
	oddPicture.style.display="block"
	
}

function buttonSw(buttonThree) {
	buttonThree.style="background-color:white; position:absolute; TOP:320px; LEFT:570px"
	var colorButtons = document.querySelectorAll(".colors")
	for (var i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display="none"
	}
	var numberButtons = document.querySelectorAll(".numbersEven")
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].style.display="block"
	}
	var closed = document.querySelector("#first")
	closed.style.display="none"
	var oddPicture = document.querySelector("#second")
	oddPicture.style.display="block"
}

function buttonSe(buttonFour) {
	buttonFour.style="background-color:white; position:absolute; TOP:320px; LEFT:690px"
	var colorButtons = document.querySelectorAll(".colors")
	for (var i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display="none"
	}
	var numberButtons = document.querySelectorAll(".numbersOdd")
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].style.display="block"
	}
	var closed = document.querySelector("#first")
	closed.style.display="none"
	var oddPicture = document.querySelector("#third")
	oddPicture.style.display="block"
}

function buttonNwtwo(buttonOne) {
	var colorButtons = document.querySelectorAll(".numbersOdd")  //hiding numbersOdd 
	for (var i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display="none"
	}

	var numberButtons = document.querySelectorAll(".numbersOddtwo")  //showing numbersOddtwo
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].style.display="block"
	}
}

function buttonNetwo(buttonTwo) {
	var colorButtons = document.querySelectorAll(".numbersEven")   
	for (var i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display="none"
	}

	var numberButtons = document.querySelectorAll(".numbersEventwo")
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].style.display="block"
	}
	var closed = document.querySelector("#third")
	closed.style.display="none"
	var oddPicture = document.querySelector("#second")
	oddPicture.style.display="block"
}

function buttonSwtwo(buttonThree) {
	var colorButtons = document.querySelectorAll(".numbersEven") 
	for (var i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display="none"
	}

	var numberButtons = document.querySelectorAll(".numbersEventwo")
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].style.display="block"
	}
	var closed = document.querySelector("#third")
	closed.style.display="none"
	var oddPicture = document.querySelector("#second")
	oddPicture.style.display="block"
}

function buttonSetwo(buttonFour) {
	var colorButtons = document.querySelectorAll(".numbersOdd")  //hiding numbersOdd 
	for (var i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display="none"
	}

	var numberButtons = document.querySelectorAll(".numbersOddtwo")  //showing numbersOddtwo
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].style.display="block"
	}
}



function buttonNwtwotwo(buttonOne) {
	var colorButtons = document.querySelectorAll(".numbersOdd")  //hiding numbersOdd 
	for (var i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display="none"
	}

	var numberButtons = document.querySelectorAll(".numbersOddtwo")  //showing numbersOddtwo
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].style.display="block"
	}
	var closed = document.querySelector("#second")
	closed.style.display="none"
	var oddPicture = document.querySelector("#third")
	oddPicture.style.display="block"
}

function buttonNetwotwo(buttonTwo) {
	var colorButtons = document.querySelectorAll(".numbersEven")   
	for (var i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display="none"
	}

	var numberButtons = document.querySelectorAll(".numbersEventwo")
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].style.display="block"
	}
}

function buttonSwtwotwo(buttonThree) {
	var colorButtons = document.querySelectorAll(".numbersEven") 
	for (var i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display="none"
	}

	var numberButtons = document.querySelectorAll(".numbersEventwo")
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].style.display="block"
	}
}

function buttonSetwotwo(buttonFour) {
	var colorButtons = document.querySelectorAll(".numbersOdd")  //hiding numbersOdd 
	for (var i = 0; i < colorButtons.length; i++) {
		colorButtons[i].style.display="none"
	}

	var numberButtons = document.querySelectorAll(".numbersOddtwo")  //showing numbersOddtwo
	for (var i = 0; i < numberButtons.length; i++) {
		numberButtons[i].style.display="block"
	}
	var closed = document.querySelector("#second")
	closed.style.display="none"
	var oddPicture = document.querySelector("#third")
	oddPicture.style.display="block"
}


var fortuneText = document.querySelector("#fortune")  //# selects by ID

function buttonNwthree(fort) {
	fortuneText.innerHTML = fortunes[3]
}

function buttonNethree(fort) {
	fortuneText.innerHTML = fortunes[6]
}

function buttonSwthree(fort) {
	fortuneText.innerHTML = fortunes[2]
}

function buttonSethree(fort) {
	fortuneText.innerHTML = fortunes[7]
}


function buttonNwthreethree(fort) {
	fortuneText.innerHTML = fortunes[4]
}

function buttonNethreethree(fort) {
	fortuneText.innerHTML = fortunes[5]
}

function buttonSwthreethree(fort) {
	fortuneText.innerHTML = fortunes[1]
}

function buttonSethreethree(fort) {
	fortuneText.innerHTML = fortunes[0]
}
/*
setTimeout(function() {
	var InputOne = window.prompt("Choose a color"); 
	if (InputOne === 'red' || InputOne === 'green'){
		oddColors();
	} else {
		evenColors();
	}

}, 2000)


function oddColors() {
	var InputTwo = window.prompt("Choose a number: 3, 4, 7, 8");
	if (InputTwo === '3' || InputTwo === '7' ){
		optionOne();
	} else if (InputTwo === '4' || InputTwo === '8'){
		optionTwo();
	} else {
		document.write("invaled number");
	}
}

function evenColors() {
	//"fortuneTellerImages. 1256.jpg"
	var InputThree = window.prompt("Choose a number: 1, 2, 5, 6");
	if (InputThree === '1' || InputThree === '5' ){
		optionTwo();
	} else if (InputThree === '2' || InputThree === '6'){
		optionOne();
	} else {
		document.write("invaled number");
	}
}


function optionOne() {
	//"fortuneTellerImages. 1256.jpg"
	var finaliOne = window.prompt("Choose a number: 1, 2, 5, 6");
	finalOne(finaliOne);
}

function optionTwo() {
	//"fortuneTellerImages. 3478.jpg"
	var finaliTwo = window.prompt("Choose a number: 3, 4, 7, 8");
	finalTwo(finaliTwo);
}

function finalOne(finaliOne) {
	if (finaliOne === '1') {
		document.write(fortunes[0]);
	} else if (finaliOne === '2') {
		document.write(fortunes[1]);
//	} else if (finaliOne === '3') {
//		document.write(fortunes[2]);
//	} else if (finaliOne === '4') {
//		document.write(fortunes[3]); 
	} else if (finaliOne === '5') {
		document.write(fortunes[4]); 
	} else if (finaliOne === '6') {
		document.write(fortunes[5]);
//	} else if (finaliOne === '7') {
//		document.write(fortunes[6]);
//	} else if (finaliOne === '8') {
//		document.write(fortunes[7]);
	} else {
		document.write("invaled number");
	}
}

function finalTwo(finaliTwo) {
	if (finaliTwo === '3') {
		document.write(fortunes[2]);
//	} else if (finaliOne === '2') {
//		document.write(fortunes[1]);
//	} else if (finaliOne === '3') {
//		document.write(fortunes[2]);
	} else if (finaliTwo === '4') {
		document.write(fortunes[3]); 
//	} else if (finaliOne === '5') {
//		document.write(fortunes[4]); 
//	} else if (finaliOne === '6') {
//		document.write(fortunes[5]);
	} else if (finaliTwo === '7') {
		document.write(fortunes[6]);
	} else if (finaliTwo === '8') {
		document.write(fortunes[7]);
	} else {
		document.write("invaled number");
	}
}
*/