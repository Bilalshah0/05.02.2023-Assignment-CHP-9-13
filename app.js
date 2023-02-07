// *********************************** Chapter 9-11 ********************************************


// **************Question no.01**************

// var city = prompt("Please enter a city name: ");

// if(city === "karachi"){
//     document.write("Welcome to the city of lights!");
// }



// **************Question no.02**************

// var gender = prompt("Enter your Gender(M/F)");

// if(gender === "male"){
//     alert("Good Morning Sir!");
// }else if (gender === "female"){
//     alert("Good Morning Ma'am!")
// }


// **************Question no.03**************

// var signalColor = prompt("Please enter the color of the traffic signal");

// if (signalColor == "red") {
//     alert("Must Stop");
// } else if (signalColor == "yellow") {
//     alert("Ready to move");
// } else if (signalColor == "green") {
//     alert("Move now");
// } else {
//     alert("Invalid color");
// }


// **************Question no.04**************

//     var remainingFuel = prompt("Enter the remaining fuel in your car (in litres): ");

//     if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }


// **************Question no.05**************



// **************Question no.06**************

       

// **************Question no.07**************



        // var secretNumber = 7;
        // var userGuess = prompt(" Guess the secret number from(1-10) ");

        // if (userGuess == secretNumber) {
        //     alert("Bingo! Correct answer");
        // } else if (userGuess == secretNumber +1) {
        //     alert("Close enough to the correct answer");
        // } else {
        //     alert("Wrong answer. Try again!");
        // }
 



// **************Question no.08**************

//          var numb = prompt("Enter your number");

//         if(numb / 3 ){
//                 alert("The number is divisible by 3")
//         }else {
//             console.log("The number is not divisible by 3");
//             }


// **************Question no.09**************

            // var number = prompt("Enter your number");

            // if(number % 2 == 0){ 
            //     document.write(number + " is an Even Number");
           
            // } else{
            //   document.write(number + " is an Odd Number")
            // }




// **************Question no.10**************

            // var temperature = prompt("Please enter the temperature");

            // if (temperature > 40) {
            //     document.write("It is too hot outside.");
            // } else if (temperature > 30) {
            //     document.write("The Weather today is Normal.");
            // } else if (temperature > 20) {
            //     document.write("Today's Weather is cool.");
            // } else if (temperature > 10) {
            //     document.write("OMG! Today’s weather is so Cool.")
            // }



// **************Question no.11**************

            var firstNumber = prompt("Please enter the first number:");
            var secondNumber = prompt("Please enter the second number:");
            var operation = prompt("Please enter the operation (+, -, *, /, %):");

            var result;
            
            if (operation === "+") {
                result = firstNumber + secondNumber;
            }else if (operation == '-') {
                result = firstNumber - secondNumber;
            }
            else if (operation == '*') {
                result = firstNumber * secondNumber;
            }
            else {
                result = firstNumber / secondNumber;
            }
            
            alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
